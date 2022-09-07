# groth16计算过程

[Groth16计算详解](https://mp.weixin.qq.com/s?__biz=MzU5MzMxNTk2Nw==&mid=2247486744&idx=1&sn=26425829ffedf25e9cf2652eb2dd24cd&chksm=fe131c08c964951ee9ce7204425b0f38a15a87e09da9fa44219ca3b53f2572dffe34904f8b60&scene=21#wechat_redirect)

- 1 电路描述
  - 1.1 r1cs描述
  - 1.2 QAP转化   （拉格朗日插值）
  - 1.3 domain选择

描述电路的专业术语：relation (变量和变量的描述关系)

描述 relation的语言：r1cs, qap, tinyRAM, bacs。

groth16算法 需要将 r1cs 转换为 qap 描述。

两种电路的转换成为 reduction

针对每个变量，已经知道N个y值。如何选择这些y值，对应的x值？这个就是domain的选择。

- 2 setup计算
  - 2.1 拉格朗日插值
  - 2.2 计算
  - 2.3 生成 pk/vk

- 3 Prove计算
  - 3.1 多项式系数
  - 3.2 coset值
  - 3.3 h(x) 的coset值
  - 3.4 计算h(x)多项式系数
  - 3.5 生成证明
- 4 verify计算