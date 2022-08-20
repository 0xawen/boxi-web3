# 回退函数

fallback 函数是一个是一个不接受任何参数且不返回任何内容的函数。



执行回退函数的情况：

- 调用一个不存在的函数
- 向不存在 receive() 的合约发送eth 或者 msg.value 不存在

当通过 transfer 或 send 调用 fallback 时，gas 限制为 2300。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Fallback {
    event Log(uint gas);

    // Fallback function must be declared as external.
    fallback() external payable {
        // send / transfer (forwards 2300 gas to this fallback function)
        // call (forwards all of the gas)
        emit Log(gasleft());
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
```

