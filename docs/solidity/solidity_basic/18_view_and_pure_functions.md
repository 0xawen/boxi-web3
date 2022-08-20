# view and pure 函数

Getter 函数可以声明为 view 或 pure。

View 函数不会更改任何状态。

纯函数声明不会更改或读取任何状态变量。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // Promise not to modify or read from the state.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
```

