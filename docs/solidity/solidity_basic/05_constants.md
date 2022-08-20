# 常量

常量就是不可以修改的变量。

常量会被硬编码，使用常量会节省 gas消耗。



```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Constants {
	// 常量大写是编码约定
	address public constant MY_ADDRESS =0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
	
	uint public constant MY_UINT = 123;
}
```

