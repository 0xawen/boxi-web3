# 零知识证明库概述

因为性能的原因，目前大部分的密码学库都是使用rust/c++开发。

这里更多的是关注rust相关的库。



## zk-snark

Groth16算法是zkSNARK的典型算法，目前在ZCash，Filecoin，Coda等项目中使用。



bellman是Zcash团队用Rust语言开发的一个zk-SNARK软件库，实现了Groth16算法。

项目地址：https://github.com/zcash/librustzcash/tree/master/bellman



ethsnarks在libsnark的基础上，实现了以太坊上与zkSNARK相关的智能合约和电路。

ethsnarks的源代码地址：https://github.com/HarryR/ethsnarks.git



## bulletproof

bulletproof: https://github.com/Mr-Boxi/bulletproofs



## plonk

plonk: https://github.com/Mr-Boxi/plonk
