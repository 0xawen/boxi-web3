# 计数器

一个简单的计数器合约

- get
- increment
- decrement

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
contract Counter {
	uint public count;
	
	// function to get the current count
	function get() public view returns (uint) {
		return count;
	}
	
	function inc() public {
		count += 1;
	}
	
	function dec() public {
		count -= 1;
	}
}
```

