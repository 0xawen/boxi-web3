# 零知识证明库概述

zero knowledge proofs （zkp）
因为性能的原因，目前大部分的密码学库都是使用rust/c++开发。

这里更多的是关注rust相关的库。



## 零知识资料库

https://github.com/matter-labs/awesome-zero-knowledge-proofs



## 零知识证明系统

1. **snarks**

SNARK = **S**uccinct **N**on-interactive **AR**guments of **K**nowledge

简洁的非交互式知识证明

2. **snorks**

SNORK = **S**uccinct **N**on-interactive **O**ecumenical (Universal) a**R**guments of **K**nowledge

简洁的非交互式的普遍的（普遍的）知识证明


 3. **bulletproofs**

bulletproofs

4. **stark**

STARK = **S**uccinct (**S**calable) **T**ransparent **AR**guments of **K**nowledge

简洁（可扩展）透明的知识证明





## libsnark

libsnark给出了SNARK相关算法的全貌，各种Relation，Language，Proof System。

为了更好的生成R1CS电路，libsnark抽象出protoboard和gadget，方便开发者快速搭建电路。

项目地址：https://github.com/scipr-lab/libsnark



## bellman

bellman是Zcash团队用Rust语言开发的一个zk-SNARK软件库，实现了Groth16算法。

项目地址：https://github.com/zcash/librustzcash/tree/master/bellman

zcash的证明系统: https://github.com/zcash/librustzcash



## ethsnarks

ethsnarks在libsnark的基础上，实现了以太坊上与zkSNARK相关的智能合约和电路。

ethsnarks的源代码地址：https://github.com/HarryR/ethsnarks



## dalek bulletproof

bulletproof: https://github.com/dalek-cryptography/bulletproofs

## plonk

plonk: https://github.com/Mr-Boxi/plonk



## zkinterface

零知识互操作行的框架

https://github.com/QED-it/zkinterface



## ZoKrates

ZoKrates 是以太坊上 zkSNARKs 的工具箱。

https://github.com/JiangXb-son/ZoKrates



## gnark

go语言的零知识库

https://github.com/ConsenSys/gnark
