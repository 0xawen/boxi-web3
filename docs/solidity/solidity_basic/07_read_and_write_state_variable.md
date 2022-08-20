# 状态变量的读写

更新写入状态变量需要发起一笔交易。

如果是读取状态变量，是不需要交易费用的。



```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleStorage {
	uint public num;
	
	function set(uint _num) public {
		num = _num;
	}
    
    // 读取状态变量不需要发起交易
    function get() public view returns(uint) {
    	return num;
    }
}
```

