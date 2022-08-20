# 发送 eth 的函数(transfer, send, call)

### 如何发送eth

- transfer (2300gas, throws error)
- send (2300 gas, returns bool)
- call(forward all gas or set gas, returns bool)

### 如何接收eth

一个合约接受eth 至少拥有以下的一个函数：

- receive()  external payable
- fallback() external payable



如果 msg.data 是空的调用 receive(),  否则 fallback() 被调用。

### 应该使用那个函数

建议使用call 和重入guiard 相结合的方法。

重入守卫：

- 在调用其他合约之前进行所有状态更改

- 使用重入保护 modifier

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ReceiveEther {
    /*
    Which function is called, fallback() or receive()?

           send Ether
               |
         msg.data is empty?
              / \
            yes  no
            /     \
receive() exists?  fallback()
         /   \
        yes   no
        /      \
    receive()   fallback()
    */

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    function sendViaTransfer(address payable _to) public payable {
        // This function is no longer recommended for sending Ether.
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
```

