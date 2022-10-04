# 跨合约调用

跨程序调用，就是在我们的程序中调用另一个程序的指令。让我们看一下我们的第一个例子，它是 SPL 代币计划的转账指令。

我们需要进行转账所需的账户是：

1. 源代币账户（我们持有代币的账户）

2. 目标代币账户（我们要将代币转移到的账户）
3. 源代币账户持有人（我们将要签名的钱包地址）

```rust
use solana_program::{
  account_info::{next_account_info, AccountInfo};
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program::invoke,
    program_error::ProgramError,
    pubkey::Pubkey,
};

use spl_token:instruction::transfer;

entrypoint!(process_instruction);

// Accounts required
/// 1. [writable] Source Token Account
/// 2. [writable] Destination Token Account
/// 3. [signer] Source Token Account holder's PubKey
/// 4. [] Token Program
pub fn process_instruction(
	_program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let account_iter = &mut accounts.iter();
    
    // Accounts required for token transfer
    // 1. token account we hold
    let source_token_account = next_account_info(accounts_iter)?;
    // 2. token account to send to
    let destination_token_account = next_account_info(account_iter)?;
    // 3. our wallet address
    let source_token_account_holder = next_account_info(account_iter)?;
    // 4. token program
    let token_program = next_account_info(account_iter)?;
    
    // Parsing the token transfer amount from instruction data
    let token_transfer_amount = instruction_data
    	.get(..8)
    	.and_then(|slice| slice.try_into().ok())
    	.map(u64::from_le_bytes)
    	.ok_or(ProgramError::InvalidAccountData)?;
    
       msg!(
        "Transferring {} tokens from {} to {}",
        token_transfer_amount,
        source_token_account.key.to_string(),
        destination_token_account.key.to_string()
    );
    
    
    // Creating a new TransactionInstruction
    /*
        Internal representation of the instruction's return value (Result<Instruction, ProgramError>)

        Ok(Instruction {
            program_id: *token_program_id, // PASSED FROM USER
            accounts,
            data,
        })
    */
    
    let transfer_tokens_instruction = transfer(
    	&token_program.key,
        &source_token_account.key,
        &destination_token_account.key,
        &source_token_account_holder.key,
        &[&source_token_account_holder.key],
        token_transfer_amount,
    )?;
    
    let required_accounts_for_transfer = [
        source_token_account.clone(),
        destination_token_account.clone(),
        source_token_account_holder.clone(),
    ];
    
    invoke(
    	&transfer_token_instruction,
        &required_accounts_for_transfer,
    )?;
    
    msg!("Transfer successful");

    Ok(())
}
```



```rust
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program::invoke,
    program_error::ProgramError,
    pubkey::Pubkey,
    rent::Rent,
    system_instruction::create_account,
    sysvar::Sysvar,
};

entrypoint!(process_instruction);

// Accounts required
/// 1. [signer, writable] Payer Account
/// 2. [signer, writable] General State Account
/// 3. [] System Program
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();

    // Accounts required for token transfer

    // 1. Payer account for the state account creation
    let payer_account = next_account_info(accounts_iter)?;
    // 2. Token account we hold
    let general_state_account = next_account_info(accounts_iter)?;
    // 3. System Program
    let system_program = next_account_info(accounts_iter)?;

    msg!(
        "Creating account for {}",
        general_state_account.key.to_string()
    );

    // Parsing the token transfer amount from instruction data
    // a. Getting the 0th to 8th index of the u8 byte array
    // b. Converting the obtained non zero u8 to a proper u8 (as little endian integers)
    // c. Converting the little endian integers to a u64 number
    let account_span = instruction_data
        .get(..8)
        .and_then(|slice| slice.try_into().ok())
        .map(u64::from_le_bytes)
        .ok_or(ProgramError::InvalidAccountData)?;

    let lamports_required = (Rent::get()?).minimum_balance(account_span as usize);

    // Creating a new TransactionInstruction
    /*
        Internal representation of the instruction's return value (Instruction)

        Instruction::new_with_bincode(
            system_program::id(), // NOT PASSED FROM USER
            &SystemInstruction::CreateAccount {
                lamports,
                space,
                owner: *owner,
            },
            account_metas,
        )
    */

    let create_account_instruction = create_account(
        &payer_account.key,
        &general_state_account.key,
        lamports_required,
        account_span,
        program_id,
    );

    let required_accounts_for_create = [
        payer_account.clone(),
        general_state_account.clone(),
        system_program.clone(),
    ];

    // Passing the TransactionInstruction to send (with the issused program_id)
    invoke(&create_account_instruction, &required_accounts_for_create)?;

    msg!("Transfer successful");

    Ok(())
}
```

