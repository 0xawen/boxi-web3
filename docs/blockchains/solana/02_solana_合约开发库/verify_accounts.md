# 验证acconts

由于 Solana 中的程序是无状态的，因此作为程序创建者，我们必须确保通过的帐户尽可能经过验证，以避免任何恶意帐户进入。可以做的基本检查是

1. 检查预期的签名者帐户是否已实际签名
2. 检查预期的状态帐户是否已被检查为可写
3. 检查预期状态帐户的所有者是否是被调用的程序 id
4. 如果是第一次初始化状态，请检查账户是否已经初始化。
5. 检查是否有任何通过的跨程序 ID（在需要时）符合预期。



```rust
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    clock::Clock,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
    rent::Rent,
    system_program::ID as SYSTEM_PROGRAM_ID,
    sysvar::Sysvar,
};

entrypoint!(process_instruction);

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct HelloState {
    is_initialized: bool,
}

// Accounts required
/// 1. [signer] Payer
/// 2. [writable] Hello state account
/// 3. [] System Program
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    // Payer account
    let payer_account = next_account_info(accounts_iter)?;
    // Hello state account
    let hello_state_account = next_account_info(accounts_iter)?;
    // System Program
    let system_program = next_account_info(accounts_iter)?;

    let rent = Rent::get()?;
    
    // checking if payer account is the signer
    if !pay_account.is_signer{
        return Err(Program::MissingRequiredSignature);
    }
    
    //checking if hello state account is rent exempt
    if !rent.is-exempt(hello_state_account.lamports(), 1){
        return Err(Program::AccountNotRentExempt);
    }
    // Checking if hello state account is writable
    if !hello_state_account.is_writable {
        return Err(ProgramError::InvalidAccountData);
    }

    // Checking if hello state account's owner is the current program
    if hello_state_account.owner.ne(&program_id) {
        return Err(ProgramError::IllegalOwner);
    }

    // Checking if the system program is valid
    if system_program.key.ne(&SYSTEM_PROGRAM_ID) {
        return Err(ProgramError::IncorrectProgramId);
    }

    let mut hello_state = HelloState::try_from_slice(&hello_state_account.data.borrow())?;

    // Checking if the state has already been initialized
    if hello_state.is_initialized {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    hello_state.is_initialized = true;
    hello_state.serialize(&mut &mut hello_state_account.data.borrow_mut()[..])?;
    msg!("Account initialized :)");

    Ok(())  
    
}
```

