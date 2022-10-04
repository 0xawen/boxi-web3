# 合约中的转账

```rust
/// 将 lamports 从一个 account(程序拥有的) 转移到 另一个 account (可以是任何账号)
fn transfer_service_fee_lamports(
	from_account: &AccountInfo,
    to_account: &AccountInfo,
    amount_of_lamports: u64,
) -> ProgramResult {
    // from account have enough lamports to transfer?
    if **from_account.try_borrow_lamports? < amount_of_lamports {
        return Err(CostomError::InsufficientFundsForTransaction.into());
    }
    // 借记 from_account 贷记 to_account
	**from_account.try_borrow_mut_lamports()? -= amount_of_lamports;
    **to_account.try_borrow_mut_lamports()? += amount_of_lamports;
	Ok(())
}

// 主函数 处理发送到合约的函数
fn instruction_handler(accounts: &[AccountInfo]) -> ProgramResult {
    // get the from and to accounts
    let account_info_iter = &mut accounts.iter();
    let from_account = next_account_info(account_info_iter)?;
    let to_service_account = next_account_info(account_info_iter)?;
    
    transfer_service_fee_lamports(from_account, to_service_account, 5u64)?;

  // Perform the primary instruction
    // ... etc.
    Ok(())
}
```