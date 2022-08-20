# ether and wei

发起交易是需要支付 ether.

 1 ether = 10**18 wei



```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherUints {
	uint public oneWei = 1 wei;
	bool public isOneWei = 1 wei == 1;
	
	uint public oneEther = 1 ether;
	
	bool public isOneEther = 1 ether == 1e18;
}
```

