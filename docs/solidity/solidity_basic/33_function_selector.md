# 函数选择器

调用函数时，calldata 的前 4 个字节指定调用哪个函数。

这 4 个字节称为函数选择器。

例如下面的代码：调用合约的 transfer 函数

```solidity
addr.call(abi.encodeWithSignature("transfer(address,uint256)",0xSomeaddress, 123))
```

 `abi.encodeWithSignature(....)` 返回的前 4个字节就是函数选择器。

如果您在代码中预先计算并内联函数选择器，也许您可以节省少量气体。

以下是函数选择器的计算方式。

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract FunctionSelector {
    /*
    "transfer(address,uint256)"
    0xa9059cbb
    "transferFrom(address,address,uint256)"
    0x23b872dd
    */
    function getSelector(string calldata _func) external pure returns (bytes4) {
        return bytes4(keccak256(bytes(_func)));
    }
}
```

