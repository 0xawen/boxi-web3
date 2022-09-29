# 合约开发模式和最佳做法

- Dappsys：安全，简单和灵活的以太坊合约构建模块
  - 有针对以太坊/Solidity常见问题的解决方案，例如。
    - [白名单](https://steemit.com/ethereum/@nexusdev/dapp-a-day-11-whitelist-boring)
    - [可升级的ERC20代币](https://steemit.com/ethereum/@nikolai/dapp-a-day-6-upgradeable-tokens)
    - [ERC20-令牌库](https://steemit.com/ethereum/@nexusdev/dapp-a-day-18-erc20-token-vault)
    - [验证（RBAC）](https://steemit.com/ethereum/@nikolai/dapp-a-day-4-access-control-via-auth)
    - [...更多...](https://github.com/dapphub/dappsys)
  - 为[MakerDAO](https://github.com/makerdao/maker-otc)或[The TAO](https://github.com/ryepdx/the-tao)提供构建块
  - 在创建自己的未经测试的解决方案之前，应咨询该公司
  - [Dapp-a-day 1-10](https://steemit.com/@nikolai) 和 [Dapp-a-day 11-25](https://steemit.com/@nexusdev)中描述了用法
- OpenZeppelin合同：以Solidity语言编写的可重用和安全智能合同的开放框架。
  - 可能是使用最广泛的安全库和智能合约库
  - 与Dappsys相似，更多地集成到Truffle框架中了
  - [有关安全审核最佳做法的博客](https://blog.openzeppelin.com/)
- [装配高级车间](https://github.com/androlo/solidity-workshop)
- [更简单的以太坊Multisig](https://medium.com/@ChrisLundkvist/exploring-simpler-ethereum-multisig-contracts-b71020c19037) - 特点是 *Benefits*
- [CryptoFin Solidity审核清单](https://github.com/cryptofinlabs/audit-checklist) - 常见发现清单，以及审核主网启动合同时要注意的问题。
- aragonOS：用于构建DAO，Dapp和协议的智能合约框架
  - 可升级性：智能合约可以升级到新版本
  - 权限控制：通过使用`auth`和`authP`修饰符，您可以保护功能，以便只有其他应用或实体才能访问它
  - 转发器：aragonOS应用程序可以将其执行操作的意图发送给其他应用程序，以便在满足一组要求的情况下转发意图
- EIP-2535钻石标准
  - 组织合同，使它们共享相同的合同存储和以太坊地址。
  - 解决最大24KB的合同大小限制。
  - 通过在单个事务中添加/替换/删除任意数量的功能来升级钻石。
  - 通过使用标准事件记录升级，透明性是透明的。
  - 获取有关具有事件和/或四个标准功能的钻石的信息。

##### 可升级性

- 博客von Elena Dimitrova，开发者位于Colony.io
  - https://blog.colony.io/writing-more-robust-smart-contracts-99ad0a11e948
  - https://blog.colony.io/writing-upgradeable-contracts-in-solidity-6743f0eecc88
- Aragon 研究博客
  - [开发库及其发展](https://blog.aragon.org/library-driven-development-in-solidity-2bebcaf88736)
  - [先进的Solidity代码部署技术](https://blog.aragon.org/advanced-solidity-code-deployment-techniques-dc032665f434/)
- [OpenZeppelin on Proxy Libraries](https://blog.openzeppelin.com/proxy-libraries-in-solidity-79fbe4b970fd/)