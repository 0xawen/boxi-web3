# libsnark库

https://github.com/scipr-lab/libsnark

https://github.com/QED-it/libsnark-tutorial_forge_proof

## Relation

描述电路的语言,  libsnark库总结了几种描述语言：

- constraint satisfaction problem类

- - **R1CS** - Rank-1 Constraint System
  - **USCS** - Unitary-Square Constraint System

- circuit satisfaction problem类

- - **BACS** - Bilinear Arithmetic Circuit Satisfiability
  - **TBCS** - Two-input Boolean Circuit Satisfiability

- ram computation类

  RAM是Random Access Machine的缩写。libsnark总结了两种RAM计算框架：

- - **tinyRAM**
  - **fooRAM**

- arithmetic program类

- - **QAP** - Quadratic Arithmetic Program（GGPR13）
  - **SAP** - Square Arithmetic Program（GM17）
  - **SSP** - Square Span Program (DFGK14)



## Redution

Reduction实现了不同描述语言之间的转化。libsnark给出了如下一系列的转化实现：

- bacs -> r1cs
- r1cs -> qap
- r1cs -> sap
- ram -> r1cs
- tbcs -> uscs
- uscs -> ssp



## zk proof system

libsnark 提供了四种证明系统

- **pcd** (Proof-Carrying Data)
- **ppzkadsnark** (PreProcessing Zero-Knowledge Succinct Non-interactive ARgument of Knowledge Over Authenticated Data)
- **ppzksnark** (PreProcessing Zero-Knowledge Succinct Non-interactive ARgument of Knowledge)
- **zksnark** (Zero-Knowledge Succinct Non-interactive ARgument of Knowledge)

著名的Groth16算法，属于ppzksnark。因为Groth16在证明之前，需要预处理生成CRS。



## Gadget

为了更好的生成R1CS电路，libsnark抽象出protoboard和gadget，方便开发者快速搭建电路。

libsnark提供了两套Gadget库：gadgetlib1和gadgetlib2。libsnark中很多示例是基于gadgetlib1搭建。gadgetlib1也提供了更丰富的gadget。