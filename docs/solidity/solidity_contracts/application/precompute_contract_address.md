# 预先计算合约地址

在合约部署之前，合约地址是可以预先计算的 --- create2。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Factory {
	function deploy(address _owner, uint _foo， bytes32 _salt) public payable returns(address){
	     // This syntax is a newer way to invoke create2 without assembly, you just need to pass salt
        // https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2
        return address(new TestContract{salt: _salt}(_owner, _foo));
	}
}


// 测试合约
contract TestContract {
    address public owner;
    uint public foo;

    constructor(address _owner, uint _foo) payable {
        owner = _owner;
        foo = _foo;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
```

