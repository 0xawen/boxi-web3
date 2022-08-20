# 不可变变量

不可变变量就像 常量。

不可变变量可以在`constructor`中设定，但是设定之后就不可以改变。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Immutable {
	address public immutable MY_ADDRESS;
	uint public immutable MY_UINT;
	
	constructor(uint _myUint){
		MY_ADDRESS = msg.sender;
		MY_UINT = _myUint;
	}
}
```

