# 基本数据类型

- boolean
- uint
- int
- address



```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Primitives {
	bool public boo = true;
	
	uint public u8 = 1;
	uint public u256 = 456;
    uint public u = 123;  // uint 是 u256 的别名
    
    
    // int 的最大最小值
    int public minInt = type(int).min;
    int public maxInt = type(int).max;
    
    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

	bytes1 a = 0xb5;
	bytes1 b = 0x56;
	
	// Default values
    // Unassigned variables have a default value 未分配变量都有默认值
    bool public defaultBoo; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}
```

