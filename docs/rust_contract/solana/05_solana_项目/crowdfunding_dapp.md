# 众筹dapp
git: https://github.com/SushantChandla/solana-crowd-funding/blob/main/program/src/lib.rs
## 项目设置

```bash
npx create-react-app crowd-funding
```

创建合约项目
```bash
cd crowd-funding
cargo new program --lib
```

创建 `Xargo.toml`, 写入
```toml
[target.bpfel-unknown-unknown.dependencies.std]
features = []
```
更新`Cargo.toml`
```toml
[package]
name = "program"
version = "0.1.0"
edition = "2018"

[dependencies]
solana-program = "1.7.14"
borsh = "0.9.1"
borsh-derive = "0.9.1"

[features]
no-entrypoint = []

[dev-dependencies]
solana-program-test = "1.7.14"
solana-sdk = "1.7.14"

[lib]
crate-type = ["cdylib", "lib"]
```

### 确定众筹的功能

- 创建一个众筹活动

- 从活动中提款

- 向活动捐赠

### 编写代码
先写入基础代码
```rust
// First we include what we are going to need in our program. 
// This  is the Rust style of importing things.
// Remember we added the dependencies in cargo.toml
// And from the `solana_program` crate we are including  all the required things.
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
    rent::Rent,
    sysvar::Sysvar,
};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult{
     Ok(())
}
```

然后写入基本流程
```rust
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
    rent::Rent,
    sysvar::Sysvar,
};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult{
    if instruction_data.len() == 0{
        return Err(ProgramError::InvalidInstructionData);
    }
    
    // 1. choose 0 for crate_campaign
    // 2. 1 for withdraw
    // 3. 2 fro donate
    if instruction_data[0] == 0 {
        return create_campaign(
            program_id,
            accounts,
            &instruction_data[1..instrction_data.len()],
        );
    }else if instruction_data[0] == 1 {
        return withdraw(
             program_id,
             accounts,
             &instruction_data[1..instrction_data.len()],       
        );
    }else if instuction_data[0] == 2 {
        return donate(
             program_id,
             accounts,
             &instruction_data[1..instrction_data.len()],       
        );
    }
    msg!("din't find the entrypoint required");
    Err(ProgramError::InvalidInstructionData)
}

fn create_campaign(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    Ok(())
}

fn withdraw(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    Ok(())
}

fn donate(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    Ok(())
}
```

## 创建活动详细
```rust
#[derive(Debug)]
struct Human {
    /// we can add all the fields in our struct here.
    /// we also have to specify the type of each variable.
    /// Like the [eyes_color] here is a `String` type object.
    pub eyes_color: String,
    pub name: String,
    pub height: i32,
}
```

```rust
#[derive(BorshSerialize, BorshDeserialize, Debug)]
struct CampaignDetails {
    pub admin: Pubkey,
    pub name: String,
    pub description: String,
    pub image_link: String,
    pub amount_donated: u64,
}
```

完成创建逻辑
```rust
fn create_campaign(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let account_iter = &mut accounts.iter();
    
    let writing_account = next_account_info(accounts_iter)?;
    
    let creator_account = next_account_info(accounts_iter)?;

    if !create_account.is_signer{
        msg!("creator_account should be signer");
        return Err(ProgramError::IncorrectProgramId);
    }
    
    if writing_account.owner != program_id {
       msg!("writing_account isn't owned by program");
       return Err(ProgramError::IncorrectProgramId);    
    }
    
    let mut input_data = CampaignDetails::try_from_slice(&instruction_data)
        .expect("Instruction data serialization didn't worked");
    
    if input_data.admin != *creator_account.key{
        msg!("Invaild instruction data");
        return Err(ProgramError::InvalidInstructionData);
    }

    /// get the minimum balance we need in our program account.
    let rent_exemption = Rent::get()?.minimum_balance(writing_account.data_len());
    /// And we make sure our program account (`writing_account`) has that much lamports(balance).
    if **writing_account.lamports.borrow() < rent_exemption {
        msg!("The balance of writing_account should be more then rent_exemption");
        return Err(ProgramError::InsufficientFunds);
    }
    // Then we can set the initial amount donate to be zero.
    input_data.amount_donated=0;
    
    input_data.serialize(&mut &mut writing_account.data.borrow_mut()[..]?;
    Ok(())
);

}
```

## 提取存款实现

提取存款的数据数据结构
```rus#[derive(BorshSerialize, BorshDeserialize, Debug)]
  struct WithdrawRequest {
      pub amount: u64,
  }
```

实现提取逻辑
```rust
fn withdraw(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult{
    let accounts_iter = &mut accounts.iter();
    let writing_account = next_account_info(accounts_iter)?;
    let admin_account = next_account_info(accounts_iter)?;
    
    // We check if the writing account is owned by program.
    if writing_account.owner != program_id {
        msg!("writing_account isn't owned by program");
        return Err(ProgramError::IncorrectProgramId);
    }

    // Admin account should be the signer in this trasaction.
    if !admin_account.is_signer {
        msg!("admin should be signer");
        return Err(ProgramError::IncorrectProgramId);
    }
    
    let campaign_data = CampaignDetails::try_from_slice(*writing_account.data.borrow())
        .expect("Error deserializing data");
    
    let campaign_data.admin != *admin_account.key {
        msg!("Only the account admin can withdraw");
        return Err(ProgramError::InvalidAccountData);
    }

    let input_data = WithdrawRequest::try_from_slice(&instruction_data)
        .expect("Instruction data serialization didn't worked");
    
     let rent_exemption = Rent::get()?.minimum_balance(writing_account.data_len());
 
     /// We check if we have enough funds
     if **writing_account.lamports.borrow() - rent_exemption < input_data.amount {
         msg!("Insufficent balance");
         return Err(ProgramError::InsufficientFunds);
     }
    
     /// Transfer balance
     /// We will decrease the balance of the program account, and increase the admin_account balance.
     **writing_account.try_borrow_mut_lamports()? -= input_data.amount;
     **admin_account.try_borrow_mut_lamports()? += input_data.amount;
     Ok(())   
}
```

### 向活动捐款
```rust
fn donate(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let writing_account = next_account_info(accounts_iter)?;
    let donator_program_account = next_account_info(accounts_iter)?;
    let donator = next_account_info(accounts_iter)?;
    
    if writing_account.owner != program_id {
        msg!("writing_account isn't owned by program");
        return Err(ProgramError::IncorrectProgramId);
    }
    if donator_program_account.owner != program_id {
        msg!("donator_program_account isn't owned by program");
        return Err(ProgramError::IncorrectProgramId);
    }
    if !donator.is_signer {
        msg!("donator should be signer");
        return Err(ProgramError::IncorrectProgramId);
    }
    
    let mut campaign_data = CampaignDetails::try_from_slice(*writing_account.data.borrow())
        .expect("Error deserializing data");

    campaign_data.amount_donated += **donator_program_account.lamports.borrow();

    **writing_account.try_borrow_mut_lamports()? += **donator_program_account.lamports.borrow();
    **donator_program_account.try_borrow_mut_lamports()? = 0;

    campaign_data.serialize(&mut &mut writing_account.data.borrow_mut()[..])?;

    Ok(())
}
```

## 部署合约

```bash
cargo build-bpf --manifest-path=Cargo.toml --bpf-out-dir=dist/program

solana-keygen new -o keypair.json

solana airdrop 1 <YourPublicKey> --url https://api.devnet.solana.com 

solana deploy --keypair keypair.json dist/program/program.so --url https://api.devnet.solana.com 

Program Id: 286rapsUbvDe1ZgBeNhp37YHvEPwWPTr4Bkce4oMpUKT
```

## 前端开发

todo

