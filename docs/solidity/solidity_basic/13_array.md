# 数组

数组具有编译时 固定大小 和 动态大小。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Array {
	// several ways to initialize an array
	uint[] public arr;
	uint[] public arr2 = [1,2,3];
	
	// 固定大小的数组
	uint[10] public myFixedSizeArr;
	
	function get(uint i) public view returns(uint) {
		return arr[i];
	}
	
	// solidity 可以返回整个数组
	// 但是因该避免返回长度可以无限增长的数组
	function getArr()public view returns (uint[] memory) {
		return arr;
	}
	
	function push(uint i) public {
		arr.push(i);
	}
	
	function pop() public {
		arr.pop();
	}
	
	function getLenght() public view returns (uint) {
		return arr.length;
	}
	
	function remove(uint index) public {
		// delete 不会改变数组的长度
		// 重新将元素设定为 默认值
		delete arr[index];
	}
	
	function eamplex() external{
		// 在内存中创建数组，只可以创建固定大小的数组
		uint[] memory a = new uint[](5);
	}
}
```

### 移除数组元素

通过从右向左移动元素来删除数组元素

```solidity
// todo
```

