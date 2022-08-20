# 合约中获取时钟

1.将 SYSVAR_CLOCK_PUBKEY 传递给指令

2.直接在指令内访问时钟。

### passing clock as an account inside an instruction

```rust
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
  account_info::{next_account_info, AccountInfo},
    clock::Clock,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
    sysvar::SysVar,
};

entrypoint!(process_instruction);

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct HelloState {
    is_initialized: bool,
}

// Accounts required
/// 1. [signer, writable] Payer
/// 2. [writable] Hello state account
/// 3. [] Clock sys var
pub fn process_instruction(
	_program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult{
     let accounts_iter = &mut accounts.iter();
    // Payer account
    let _payer_account = next_account_info(accounts_iter)?;
    // Hello state account
    let hello_state_account = next_account_info(accounts_iter)?;
    // Clock sysvar
    let sysvar_clock_pubkey = next_account_info(accounts_iter)?;
    
    let mut hello_state = HelloState::try_from_slice(&hello_state_account.data.borrow())?;
    hello_state.is_initialized = true;
    hello_state.serialize(&mut &mut  hello_state_account.data.borrow_mut()[..])?;
    msg!("Account initialized:");
    
    let clock = Clock::from_account_info(&sys_clock_pubkey);
    // geting timestamp
    let current_timestamp = clock.uinx_timestamp;
    msg!("Current Timestamp: {}", current_timestamp);
    Ok(())
    
}
```

现在我们通过客户端传递时钟的 sysvar 公共地址

### 直接在指令内访问时钟

```rust
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    clock::Clock,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
    sysvar::Sysvar,
};

entrypoint!(process_instruction);

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct HelloState {
    is_initialized: bool,
}

// Accounts required
/// 1. [signer, writable] Payer
/// 2. [writable] Hello state account
pub fn process_instruction(
	_program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],	
) -> ProgramResult {
     let accounts_iter = &mut accounts.iter();
    // Payer account
    let _payer_account = next_account_info(accounts_iter)?;
    // Hello state account
    let hello_state_account = next_account_info(accounts_iter)?;
    
    
    // getting clock directly
    let clock = Clock::get()?;
    
    let mut hello_state = HelloState:;try_from_slice(&hello_state_account.data.borrow())?;
    hello_state.is_initialized = true;
    hello_state.serialize(&mut &mut hello_state_account.data.borrow_mut()[..])?;
    msg!("Account initialized :)");
    
    // Getting timestamp
    let current_timestamp = clock.unix_timestamp;
    msg!("Current Timestamp: {}", current_timestamp);

    Ok(())
}
```

客户端指令，现在只需要传递状态和付款人帐户。

```tsx
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction, 
} from "@solana/web3.js";

(async () => {
    const programId = new PublicKey("4ZEdbCtb5UyCSiAMHV5eSHfyjq3QwbG3yXb6oHD7RYjk");
    
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    // todo
})();
```

