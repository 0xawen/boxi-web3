/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  // 前言
  introSidebar :[
      '编程',
      'intro',
  ],
  // 编程基础
  program_basics: [
    'program_basics/info',
    {
      label: '操作系统',
      type: 'category',
      items: [
        'program_basics/os/info',
        'program_basics/os/进程管理',
        'program_basics/os/存储管理',
        'program_basics/os/文件管理',
        'program_basics/os/设备管理',
        'program_basics/os/作业管理',
      ]
    },
    {
      label: '计算机网络',
      type: 'category',
      items: [
        'program_basics/network/info',
        'program_basics/network/tcp',
        'program_basics/network/udp',
      ]
    },
    {
      label: '数据结构',
      type: 'category',
      items: [
        'program_basics/data_structures/info',
        'program_basics/data_structures/linked',
      ]
    },
    {
      label: '算法',
      type: 'category',
      items: [
        'program_basics/algorithms/info',
      ]
    },

  ],

  // // node
  // node : [
  //     'node/info',
  // ],
  // // ts
  // ts : [
  //   'ts/info',
  // ],

  // rust
  rust : [
    'rust/info',
    {
      label: 'rust基础知识',
      type: 'category',
      items: [
        'rust/rust基础知识/内存-栈与堆',
        'rust/rust基础知识/所有权',
        'rust/rust基础知识/借用',
        'rust/rust基础知识/生命周期',
        'rust/rust基础知识/变量绑定与解构',
        'rust/rust基础知识/数值类型',
        'rust/rust基础知识/布尔类型',
        'rust/rust基础知识/单元类型',
        'rust/rust基础知识/字符类型',
        'rust/rust基础知识/数组',
        'rust/rust基础知识/元组',
        'rust/rust基础知识/结构体',
        'rust/rust基础知识/枚举',
        'rust/rust基础知识/字符串与切片',
        'rust/rust基础知识/动态数组',
        'rust/rust基础知识/键值对',
        'rust/rust基础知识/类型转换',
        'rust/rust基础知识/流程控制',
        'rust/rust基础知识/模式匹配',
        'rust/rust基础知识/函数',
        'rust/rust基础知识/方法',
        'rust/rust基础知识/泛型',
        'rust/rust基础知识/特征',
        'rust/rust基础知识/错误处理',
        'rust/rust基础知识/包和模块',
        'rust/rust基础知识/注释和文档',
      ]
    },
    {
      label: 'rust进阶知识',
      type: 'category',
      items: [
        'rust/rust进阶知识/info',
        'rust/rust进阶知识/深入类型系统/新类型和类型别名',
        'rust/rust进阶知识/深入类型系统/定长类型和不定长类型',
        'rust/rust进阶知识/深入类型系统/枚举和整数',
        'rust/rust进阶知识/函数式编程/迭代器',
        'rust/rust进阶知识/函数式编程/闭包',
        'rust/rust进阶知识/智能指针/Box堆分配对象',
        'rust/rust进阶知识/智能指针/Deref解引用',
        'rust/rust进阶知识/生命周期/深入生命周期',
        'rust/rust进阶知识/生命周期/static的生命周期',
        'rust/rust进阶知识/智能指针/Box堆分配对象',
        'rust/rust进阶知识/智能指针/Deref解引用',
        'rust/rust进阶知识/智能指针/Drop释放资源',
        'rust/rust进阶知识/智能指针/Rc与Arc',
        'rust/rust进阶知识/智能指针/Cell与RefCell',
        'rust/rust进阶知识/全局变量',
        'rust/rust进阶知识/错误处理',
      ]
    },
    {
      label: 'rust多线程编程',
      type: 'category',
      items: [
        'rust/rust多线程并发编程/info',
        'rust/rust多线程并发编程/多线程的使用',
        'rust/rust多线程并发编程/线程同步_消息传递',
        'rust/rust多线程并发编程/线程同步_锁',
        'rust/rust多线程并发编程/线程同步_条件变量',
        'rust/rust多线程并发编程/线程同步_信号量',
        'rust/rust多线程并发编程/线程同步_原子操作',
        'rust/rust多线程并发编程/基于Send和Sync的线程安全',
      ]
    },
    {
      label: 'cargo使用',
      type: 'category',
      items: [
        'rust/cargo/cargo_workflow',
        'rust/cargo/cargo_targe',
        'rust/cargo/cargo_workspace',
        'rust/cargo/cargo_条件编译',
        'rust/cargo/cargo配置格式',
      ]
    },
    {
      label: 'rust测试',
      type: 'category',
      items: [
        'rust/rust自动化测试/断言',
        'rust/rust自动化测试/单元测试',
        'rust/rust自动化测试/集成测试',
        'rust/rust自动化测试/基准测试',
      ]
    },
    {
      label: 'rust常用开发库',
      type: 'category',
      items: [
        'rust/rust开发库/info',
      ]
    },
  ],

  // go
  go : [
    'go/info',
  ],

  // solidity
  solidity : [
    'solidity/info',
    {
      label: 'solidity基础语法',
      type: 'category',
      items: [
        'solidity/solidity_basic/hello_world',
        'solidity/solidity_basic/first_app',
        'solidity/solidity_basic/primitive_data_types',
        'solidity/solidity_basic/variables',
        'solidity/solidity_basic/immutable',
        'solidity/solidity_basic/read_and_write_state_variable',
        'solidity/solidity_basic/ether_and_wei',
        'solidity/solidity_basic/gas',
        'solidity/solidity_basic/if_else',
        'solidity/solidity_basic/for_while',
        'solidity/solidity_basic/mapping',
        'solidity/solidity_basic/array',
        'solidity/solidity_basic/enum',
        'solidity/solidity_basic/structs',
        'solidity/solidity_basic/data_locations',
        'solidity/solidity_basic/function',
        'solidity/solidity_basic/view_and_pure_functions',
        'solidity/solidity_basic/error',
        'solidity/solidity_basic/function_modifier',
        'solidity/solidity_basic/events',
        'solidity/solidity_basic/constructor',
        'solidity/solidity_basic/inheritance',
        'solidity/solidity_basic/shadowing_inherited_state_variables',
        'solidity/solidity_basic/calling_parent_contracts',
        'solidity/solidity_basic/visibility',
        'solidity/solidity_basic/interface',
        'solidity/solidity_basic/payable',
        'solidity/solidity_basic/sending_eth',
        'solidity/solidity_basic/fallback',
        'solidity/solidity_basic/call',
        'solidity/solidity_basic/delegatecall',
        'solidity/solidity_basic/function_selector',
        'solidity/solidity_basic/calling_other_contract',
        'solidity/solidity_basic/create_other_contracts',
        'solidity/solidity_basic/try_catch',
        'solidity/solidity_basic/import',
        'solidity/solidity_basic/library',
        'solidity/solidity_basic/abi_decode',
        'solidity/solidity_basic/hashing_with_keccak256',
        'solidity/solidity_basic/verifying_signature',
        'solidity/solidity_basic/gas_saving_techniques'
      ],
    },
    {
      label: 'hardhat项目工具',
      type: 'category',
      items: [
        'solidity/hardhat_workflow/hardhat_project_setting',
        'solidity/hardhat_workflow/write_and_compiling',
        'solidity/hardhat_workflow/testing_contract',
        'solidity/hardhat_workflow/deploy_contracts',
        'solidity/hardhat_workflow/connect_test_networks',
        'solidity/hardhat_workflow/upgrading_contract',
      ],
    },
    {
      label: 'solidity合约库',
      type: 'category',
      items: [
        {
          label: '常见的合约',
          type: 'category',
          items: [
            'solidity/solidity_contracts/application/ether_wallet',
            'solidity/solidity_contracts/application/multi_sig_wallet',
            'solidity/solidity_contracts/application/merkle_tree',
            'solidity/solidity_contracts/application/iterable_mapping',
            'solidity/solidity_contracts/application/erc20',
            'solidity/solidity_contracts/application/erc721',
            'solidity/solidity_contracts/application/precompute_contract_address',
            'solidity/solidity_contracts/application/minimal_proxy_contract',
            'solidity/solidity_contracts/application/upgradeable_contract',
            'solidity/solidity_contracts/application/deploy_any_contract',
            'solidity/solidity_contracts/application/write_any_slot',
            'solidity/solidity_contracts/application/uni-directional_payment_channel',
            'solidity/solidity_contracts/application/bi-directional_payment_channel',
            'solidity/solidity_contracts/application/english_auction',
            'solidity/solidity_contracts/application/dutch_auction',
            'solidity/solidity_contracts/application/minimal_proxy_contract',
            'solidity/solidity_contracts/application/multi_call',
            'solidity/solidity_contracts/application/multi_delegatecall',
            'solidity/solidity_contracts/application/time_lock',
          ]
        },
        {
          label: 'openzeppelin',
          type: 'category',
          items: [
            'solidity/solidity_contracts/openzepplin/access_control',
            'solidity/solidity_contracts/openzepplin/02.1_erc20',
            'solidity/solidity_contracts/openzepplin/02.2_erc721',
            'solidity/solidity_contracts/openzepplin/02.3_erc777',
            'solidity/solidity_contracts/openzepplin/02.4_erc1155',
            'solidity/solidity_contracts/openzepplin/governance',
            'solidity/solidity_contracts/openzepplin/crosschain',
            'solidity/solidity_contracts/openzepplin/uitilities',
          ]
        },
        {
          label: '可升级合约库',
          type: 'category',
          items: [
            'solidity/solidity_contracts/openzeppelin_upgradeable/可升级合约',
            'solidity/solidity_contracts/openzeppelin_upgradeable/erc20-upgradeable-example',
          ]
        }
      ],
    },
    {
      label: 'solidity漏洞',
      type: 'category',
      items: [
        'solidity/solidity_hack/README',
        'solidity/solidity_hack/re_entrancy',
        'solidity/solidity_hack/arithmetic_overflow_underflow',
        'solidity/solidity_hack/self_destruct',
        'solidity/solidity_hack/access_private_data',
        'solidity/solidity_hack/delegatecall',
        'solidity/solidity_hack/source_of_randomness',
        'solidity/solidity_hack/denial_of_service',
        'solidity/solidity_hack/phishing_with_tx_orgin',
        'solidity/solidity_hack/hiding_malicious_code_with_external_contract',
        'solidity/solidity_hack/honeypot',
        'solidity/solidity_hack/front_running',
        'solidity/solidity_hack/block_timestamp_manipulation',
        'solidity/solidity_hack/signature_replay',
        'solidity/solidity_hack/bypass_contract_size_check',
      ]
    },
  ],

  // move
  move : [
    'move/info',
    {
      label: 'move语法基础',
      type: 'category',
      items: [
        'move/move_basic/模块与脚本',
        'move/move_basic/第一个教程创建coins',
        'move/move_basic/整数',
        'move/move_basic/布尔类型',
        'move/move_basic/地址',
        'move/move_basic/动态数组',
        'move/move_basic/签名者',
        'move/move_basic/引用',
        'move/move_basic/元组',
        'move/move_basic/局部变量和作用域',
        'move/move_basic/相等操作',
        'move/move_basic/abort和assert',
        'move/move_basic/条件',
        'move/move_basic/循环',
        'move/move_basic/函数',
        'move/move_basic/结构体和资源',
        'move/move_basic/常量',
        'move/move_basic/泛型',
        'move/move_basic/类型能力',
        'move/move_basic/use和alias',
        'move/move_basic/friend',
        'move/move_basic/包',
        'move/move_basic/单元测试',
        'move/move_basic/全局存储',
        'move/move_basic/全局存储操作',
      ]
    }
  ],

  // rust contract
  rust_contract : [
    'rust_contract/info',
    {
      label: 'solana',
      type: 'category',
      items: [
        'rust_contract/solana/solana_core_concepts/核心概念',
        'rust_contract/solana/solana_workflow/项目设置',
        'rust_contract/solana/solana_workflow/编写合约',
        'rust_contract/solana/solana_workflow/跨合约调用',
        'rust_contract/solana/solana_workflow/程序派生地址',
        'rust_contract/solana/solana_workflow/编写测试',
        'rust_contract/solana/solana_workflow/部署合约',
        {
          label: 'solana项目实战',
          type: 'category',
          items: [
            'rust_contract/solana/solana_项目/blog_dapp_by_anchor',
            'rust_contract/solana/solana_项目/crowdfunding_dapp',
            'rust_contract/solana/solana_项目/crypto_currency',
            'rust_contract/solana/solana_项目/mail_dapp',
          ],
        },
      ]
    },
  ],

  // blockchain
  blockchain : [
    'blockchain/info',
    'blockchain/aptos',
  ],
};

module.exports = sidebars;
