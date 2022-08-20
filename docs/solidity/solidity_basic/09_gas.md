# gas

一笔交易需要支付多少 ether

gas spent * gas price



- gas 计算单位
- gas spent在一笔交易中消耗gas的总和
- gas price 每一个 gas 的ether价格



具有较高gas价格的交易具有更高的优先级被包含在一个块中。



gas 限制：

- gas limit 您愿意为交易使用的最大gas气量，由您设置
- block gas limit 区块中允许的最大gas量，由网络设置

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Gas {
	uint public i = 0;
	
	function forever() public {
		while(true){
		// 这里我们运行一个循环，直到所有的gas都用完 
		// 交易失败
			i += 1;
		}
	}
}
```

