# read multiple instructions

Solana 允许我们查看当前事务中的所有指令。

我们可以将它们存储在一个变量中并对其进行迭代。

我们可以用它做很多事情，比如检查可疑交易。

```rust
use anchor_lang::{
    prelude::*,
    solana_program::{
        sysvar,
        serizlize_utils::{read_pubkey, read_u16}
    }
};
declare_id!("8DJXJRV8DBFjJDYyU9cTHBVK1F1CTCi6JUBDVfyBxqsT");

#[program]
pub mod cookbook{
    user super::*;
    
    pub fn read_multiple_instruction<'info>(ctx: Context<ReadMultipleInstruction>,creator_bump: u8) -> Result<()> {
        let instruction_sysvar_account = &ctx.accounts.instruction_sysvar_account;
        
        let instruction_sysvar_account_info = instruction_sysvar_account.to_account_info();
        
        let id = "8DJXJRV8DBFjJDYyU9cTHBVK1F1CTCi6JUBDVfyBxqsT";
        let instruction_sysvar = instruction_sysvar_account_info.data.borrow();

        let mut idx = 0;
        
        let num_instructions = read_u16(&mut idx, &instruction_sysvar).map_err(|_| MyError::NoInstructionFound)?;
        
       for index in 0..num_instructions {
            let mut current = 2 + (index * 2) as usize;
            let start = read_u16(&mut current, &instruction_sysvar).unwrap();

            current = start as usize;
            let num_accounts = read_u16(&mut current, &instruction_sysvar).unwrap();
            current += (num_accounts as usize) * (1 + 32);
            let program_id = read_pubkey(&mut current, &instruction_sysvar).unwrap();

            if program_id != id
            {
                msg!("Transaction had ix with program id {}", program_id);
                return Err(MyError::SuspiciousTransaction.into());
            }
        }
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(creator_bump:u8)]
pub struct ReadMultipleInstruction<'info> {
    #[account(address = sysvar::instructions::id())]
    instruction_sysvar_account: UncheckedAccount<'info>
}

#[error_code]
pub enum MyError {
    #[msg("No instructions found")]
    NoInstructionFound,
    #[msg("Suspicious transaction detected")]
    SuspiciousTransaction
}
```

