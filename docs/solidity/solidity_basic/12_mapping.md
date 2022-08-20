# mapping

mapping (keyType => valueType)

keyType 可以是 bytes, string, 任意 contract

valueType 可以是任意类型



```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Mapping {
	mapping(address => uint) public myMap;
	
	function get(address _addr) public view returns (uint) {
		// 如果 值没有设置，则会返回默认值
		return myMap[_addr];
	}
	
	function set(address _addr, uint _i) public {
		myMap[_addr] = _i;
	}
	
	function remove(address _addr) public {
		// 重新设置值为默认值
		delete myMap[_addr];
	}
}

contract NestedMapping {
	// 嵌套map
	mapping(address => mapping(uint => bool)) public nested;
	// 可以从嵌套的map 中获取数据
	// 尽管他没有初始化
	function get(address _addr1, uint _i) public view returns (bool) {
		return nested[_addr1][_i];
	}
	
	function set(address _addr1, uint _i, bool _boo) public {
		nested[_addr1][_i] = _boo;
	}
	
	function remove(address _addr1, uint _i) public {
		delete nested[_addr1][_i];
	}
}
```

