# 节省gas的技巧

- 使用 `calldata` 替换`memory`
- 将状态变量加载到内存中
- 使用 `++i` 替换 `i++`
- 缓存数组元素
- Short circuit - 短路



```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract GasGolf {
    // start - 50908 gas
    // use calldata - 49163 gas
    // load state variables to memory - 48952 gas
    // short circuit - 48634 gas
    // loop increments - 48244 gas
    // cache array length - 48209 gas
    // load array elements to memory - 48047 gas
    // uncheck i overflow/underflow - 47309 gas

	uint public total;
	
	// start - not gas optimized
	function sumIfEventAndLessThan99(uint[] memory nums) external {
		for(uint i = 0; i < nums.lenght; i += 1){
			bool isEven = num[i]%2 == 0;
			bool isLessThan99 = num[i] < 99;
			if(isEven && isLessThan99){
				total += num[i];
			}
		}
	}
	
	// gas optimized
	function sumIfEvenAndLessThan999(uint[] memory nums){
		uint _total = total;
		uint len = nums.length;
		
		for(uint i =0; i < len;){
			uint num = num[i];
			if (num % 2 ==0 && num < 99) {
				_total += num;
			}
			unchecked{
			 ++i;
			}
		}
		total = _total;
	}
}
```

