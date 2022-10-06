# 区块数据分析项目

## 监控项目汇总
[出处](https://github.com/ConsenSys/ethereum-developer-tools-list/blob/master/README_Chinese.md#%E7%9B%91%E6%8E%A7%E6%96%B9%E5%BC%8F)

后面再逐个分析

---
Alethio - 一个先进的以太坊分析平台，提供实时监控，洞察和异常检测，令牌指标，智能合约审计，图形可视化和区块链搜索。还可以探索以太坊去中心化交易所的实时市场信息和交易活动。

amberdata.io - 提供实时监控，洞察力和异常检测，令牌指标，智能合约审计，图形可视化和区块链搜索。

Neufund - Smart Contract Watch - 一种监视大量智能合约和交易的工具

Scout - 以太坊上智能合约的活动和事件日志的实时数据馈送

Tenderly - 一种平台，可通过Web仪表板的形式为用户提供可靠的智能合约监控和警报，而无需用户托管或维护基础架构

Chainlyt - 使用已解码的交易数据探索智能合约，查看合约的使用方式以及通过特定功能调用搜索交易

BlockScout - 一种用于检查和分析基于EVM的区块链的工具。唯一以太坊网络的功能齐全的区块链浏览器。

Terminal - 用于监视dapp的控制面板。终端可用于监视用户，dapp，区块链基础设施，交易等。 infrastructure, transactions and more.

Ethereum-watcher - 用Golang编写的可扩展框架，用于侦听链上事件并做一些响应

## 谷歌系列的的区块链数据分析项目

区块数据分析架构设计和实现：

https://github.com/blockchain-etl/blockchain-etl-architecture

https://cloud.google.com/blog/products/data-analytics/ethereum-bigquery-how-we-built-dataset

https://github.com/blockchain-etl/ethereum-etl-airflow

## 以太坊基金关于链数据分析挑战赛的博客

链接：https://blog.ethereum.org/2020/11/17/medalla-data-challenge-results

有非常好的数据分析项目，可以详细阅读。特别是第一名的 --- chaind 项目。


## 数据采集工具
【数据监听工具】https://github.com/HydroProtocol/ethereum-watcher

【合约监听工具】https://github.com/Neufund/smart-contract-watch

【合约监听工具】 https://github.com/vulcanize/eth-contract-watcher

【合约监听工具】https://github.com/Rennbon/ethmonitor

https://github.com/vulcanize

https://github.com/curvegrid/toy-block-explorer

另一个etl的示例：【https://github.com/san089/goodreads_etl_pipeline】

## 数据分析工具

【guess abi】https://github.com/JadeYeung/Solidity-utils

【guess abi】https://abi.w1nt3r.xyz/

难点在于解析一些合约数据abi。参考一些限制：
- In case the contract is a proxy, which forwards all calls to a delegate, interface detection doesn’t work, which means is_erc20 and is_erc721 will always be false for proxy contracts and they will be missing in the tokens table.

- The metadata methods (symbol, name, decimals, total_supply) for ERC20 are optional, so around 10% of the contracts are missing this data. Also some contracts (EOS) implement these methods but with wrong return type, so the metadata columns are missing in this case as well.

- token_transfers.value, tokens.decimals and tokens.total_supply have type STRING in BigQuery tables, because numeric types there can't handle 32-byte integers. You should use cast(value as FLOAT64) (possible loss of precision) or safe_cast(value as NUMERIC) (possible overflow) to convert to numbers.
The contracts that don't implement decimals() function but have the fallback function that returns a boolean will have 0 or 1 in the decimals column in the CSVs.