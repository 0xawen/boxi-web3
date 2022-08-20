# 遮蔽继承状态变量

与函数不同，状态变量不能通过在子合约中重新声明来覆盖

让我们学习如何正确覆盖继承的状态变量。(通过构造函数)

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

// Shadowing is disallowed in Solidity 0.6
// This will not compile
// contract B is A {
//     string public name = "Contract B";
// }

contract C is A {
    // This is the correct way to override inherited state variables.
    constructor() {
        name = "Contract C";
    }

    // C.getName returns "Contract C"
}
```

