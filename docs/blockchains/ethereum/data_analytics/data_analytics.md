# 区块数据分析项目


## 项目

### 谷歌系列的的区块链数据分析项目

区块数据分析架构设计和实现：

https://github.com/blockchain-etl/blockchain-etl-architecture

https://cloud.google.com/blog/products/data-analytics/ethereum-bigquery-how-we-built-dataset

https://github.com/blockchain-etl/ethereum-etl-airflow

### 以太坊基金关于链数据分析挑战赛的博客

链接：https://blog.ethereum.org/2020/11/17/medalla-data-challenge-results

有非常好的数据分析项目，可以详细阅读。特别是第一名的 --- chaind 项目。


### 数据采集工具
【数据监听工具】https://github.com/HydroProtocol/ethereum-watcher

【合约监听工具】https://github.com/Neufund/smart-contract-watch

【合约监听工具】 https://github.com/vulcanize/eth-contract-watcher

【合约监听工具】https://github.com/Rennbon/ethmonitor

https://github.com/vulcanize

https://github.com/curvegrid/toy-block-explorer

另一个etl的示例：【https://github.com/san089/goodreads_etl_pipeline】

### 数据分析工具

【guess abi】https://github.com/JadeYeung/Solidity-utils

【guess abi】https://abi.w1nt3r.xyz/

难点在于解析一些合约数据abi。参考一些限制：
- In case the contract is a proxy, which forwards all calls to a delegate, interface detection doesn’t work, which means is_erc20 and is_erc721 will always be false for proxy contracts and they will be missing in the tokens table.

- The metadata methods (symbol, name, decimals, total_supply) for ERC20 are optional, so around 10% of the contracts are missing this data. Also some contracts (EOS) implement these methods but with wrong return type, so the metadata columns are missing in this case as well.

- token_transfers.value, tokens.decimals and tokens.total_supply have type STRING in BigQuery tables, because numeric types there can't handle 32-byte integers. You should use cast(value as FLOAT64) (possible loss of precision) or safe_cast(value as NUMERIC) (possible overflow) to convert to numbers.
The contracts that don't implement decimals() function but have the fallback function that returns a boolean will have 0 or 1 in the decimals column in the CSVs.