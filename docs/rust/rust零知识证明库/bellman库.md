# bellman库

bellman主要实现了Groth16算法。本文主要总结groth16算法从理论到实践。

## bellman资料

[bellman源码分析](https://mp.weixin.qq.com/s?__biz=MzU5MzMxNTk2Nw==&mid=2247486293&idx=1&sn=f742b0df7f65384d9812a2b4c5ced561&chksm=fe131a45c9649353cce6b2de9fa63322f97f384ca6da2bce79f97afa6d8b8c193a76575cc1e8&scene=21#wechat_redirect)

[bellman地址](https://github.com/zkcrypto/bellman)

[bellman-example](https://github.com/arcalinea/bellman-examples)

[支持substrate的bellman](https://github.com/LayerXcom/bellman-substrate)

## bellman库流程

总体流程大致可以分为以下几个步骤：

1.将问题多项式拍平（flatten），构建对应的电路（Circuit）（这一步是由上层应用程序配置的)

2.根据电路生成R1CS（Rank 1 Constraint System）

3.将R1CS转化为QAP（Quadratic Arithmetic Program）。传统做法是通过拉格朗日插值，但是为了降低计算复杂度，可以通过快速傅立叶变换来实现。

4.初始化QAP问题的参数，即CRS（Common Reference Strings）

5.根据CRS和输入创建proof

6.验证proof

## bellman使用示例

阅读下面的库

[bellman-example](https://github.com/arcalinea/bellman-examples)

