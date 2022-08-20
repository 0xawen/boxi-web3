# 变量

变量的类型有3种：

- local
  - 定义在函数内
  - 不会存储在区块链上
- state
  - 定义在函数外面
  - 存储在链上
- global

​	提供关于链的信息



```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
	// 状态变量 同时存储在链上
	string public text = "Hello";
	uint public num = 123;
	
	function doSomething() public {
		// 本地变量 不会存储在链上
		uint i = 789;
		
		// 全局变量
		uint timestamp = block.timestamp;
		address sender = msg.sender;
	}
}
```

