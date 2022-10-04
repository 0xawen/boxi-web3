# 创建一个mail dapp

## 项目设置
我们的项目模板：https://github.com/mvines/solana-bpf-program-template。

项目的结构如下:
```text
├─ src
│  ├─ lib.rs -> registering modules
│  ├─ entrypoint.rs -> entrypoint to the program
│  ├─ instruction.rs -> program API, (de)serializing instruction data
│  ├─ processor.rs -> program logic
│  ├─ state.rs -> program objects, (de)serializing state
│  ├─ error.rs -> program specific errors
├─ .gitignore
├─ Cargo.lock
├─ Cargo.toml
├─ Xargo.toml
```

## 状态存储结构设计
引入borsh库，处理序列化数据。
```toml
[dependencies]
solana-program = "=1.7.10"
borsh = "0.9.1"
borsh-derive = "0.9.1"
```
邮件结构体设计：
```rust
// state.rs
use borsh::{BorshDeserialize, BorshSerialize};

// 邮件结构体
#[derive(BorshDeserialize, BorshSerialize, Debug)]
pub struct Mail {
  pub id: String,
  pub from_address: String,
  pub to_address: String,
  pub subject: String,
  pub body: String,
  pub sent_date: String,
}

// 用户的邮件列表
pub struct MailAccount {
    pub inbox: Vec<Mail>,
    pub sent: Vec<Mail>,
}
```

## 程序的入口点

entrypoints.rs
```rust
use crate::processor::Processor;
use solana_program::{
  account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, pubkey::Pubkey,
};

entrypoint!(process_instruction);
fn process_instruction(
  program_id: &Pubkey,
  accounts: &[AccountInfo],
  instruction_data: &[u8],
) -> ProgramResult {
  Processor::process(program_id, accounts, instruction_data)
}
```

## 指令设计

使用一个枚举将所有指令归纳起来
```rust
#[derive(Debug)]
pub enum MailInstruction {
  // 指令1，2，3 ...
}
```

### 指令1 ---初始化账户
- 添加初始化账号指令
```rust
use crate::error::MailError::InvalidInstruction;
use solana_program::program_error::ProgramError;


#[derive(Debug)]
pub enum MailInstruction {
  /// Initialize a new account
  ///
  /// Accounts expected
  ///
  /// 1. `[writable]` The AccountInfo of the account to be initialized
  InitAccount,
}

impl MailInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
           let (tag, rest) = input.split_first().ok_or(InvalidInstruction)?;
       
           Ok(match tag {
             0 => Self::InitAccount,
             _ => return Err(InvalidInstruction.into()),
           }) 
    }   
}
```

在 error.rs 中定义解析数据错误
```toml
thiserror = "1.0.24"
```
```rust
use thiserror::Error;

#[derive(Error, Debug, Copy, Clone)]
pub enum MailError {
  /// Invalid Instruction
  #[error("Invalid Instruction")]
  InvalidInstruction,
}

impl From<MailError> for ProgramError {
  fn from(e: MailError) -> Self {
    ProgramError::Custom(e as u32)
  }
}
```

- 实现指令处理逻辑 
在process.rs 中我们实现初始化账号的逻辑
```rust
use crate::instruction::MailInstruction;
use solana_program::{
  account_info::AccountInfo,
  entrypoint::ProgramResult,
  msg,
  pubkey::Pubkey,
};

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[&AccountInfo],
        instruction_data: &[u8],
    ) -> RrogramResult{
        let instruction = MailInstruction::unpack(instruction_data)?;
        
        match instruction {
            MailInstruction::InitAccount => {
                    msg!("Instruction: InitAccount");
                    Self::process_init_account(accounts, program_id)
            }
        }   
    }
    
    // 处理指令1 
    fn process_init_account(
        account: &AccountInfo,
        program_id: &Pubkey
      ) -> ProgramResult {
      if !account.is_writable {
        return Err(NotWritable.into());
      }
    
      if account.owner != program_id {
        return Err(ProgramError::IncorrectProgramId);
      }
    
      Ok(())
    }
    
}
```
### 指令2 --- 发送邮件
- 添加指令2 结构体
```rust
#[derive(Debug)]
pub enum MailInstruction {
  /// Initialize a new account
  ///
  /// Accounts expected
  ///
  /// 1. `[writable]` The AccountInfo of the account to be initialized
  InitAccount,
  /// Send a mail to an account.
  ///
  /// Accounts expected:
  ///
  /// 1. `[writable]` The AccountInfo of the sender
  /// 2. `[writable]` The AccountInfo of the receiver
  SendMail { mail: Mail },
}

impl MailInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
           let (tag, rest) = input.split_first().ok_or(InvalidInstruction)?;
       
           Ok(match tag {
             0 => Self::InitAccount,
             1 => Self::SendMail{
                    mail: Mail::try_from_slice(&rest)?, 
             },
             _ => return Err(InvalidInstruction.into()),
           }) 
    }   
}
```
- 实现指令2 的处理逻辑
```rust
// process.rs
MailInstruction::SendMail { mail } => {
  msg!("Instruction: SendMail");
  Self::process_send_mail(accounts, mail, program_id)
}

// 添加
fn process_send_mail(accounts: &[AccountInfo], mail: &Mail, program_id: &Pubkey) -> ProgramResult {
  Ok(())
}
```

## 编译并且部署
启动本地节点：
```bash
solana config set --url localhost

solana-test-validator
```

编译命令
```bash
cargo build-bpf
```

部署命令
```bash
solana program deploy target/deploy/<name-of-the-program>.so
```

## WebUi

todo