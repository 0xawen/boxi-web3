# 读取accounts

Solana 中的几乎所有指令都需要至少 2 到 3 个帐户，并且会在指令处理程序中提及它们期望这些帐户集的顺序。

我们利用`iter()`Rust 中的方法，而不是手动指示帐户。

```rust
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct HelloState {
    is_initialized: bool,
}
// Accounts required
/// 1. [signer] Payer
/// 2. [writable] Hello state account
/// 3. [] Rent account
/// 4. [] System Program
pub fn process_instruction(
	_program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
)-> ProgramResult {
    // fetching all accounts as a iter
    let accounts_iter = &mut accounts.iter();
    // payer account
    let payer_account = next_account_inof(accounts_iter)?;
     // Hello state account
    let hello_state_account = next_account_info(accounts_iter)?;
    // Rent account
    let rent_account = next_account_info(accounts_iter)?;
    // System Program
    let system_program = next_account_info(accounts_iter)?;
    
    Ok(())
}
```

