# 使用anchor创建一个blog dapp

## 项目设置
### 初始化anchor项目
```bash
anchor init solblog
```
### 项目目录
```text
|
├── programs
|   └── solblog
|        └── src
|             └── lib.rs
```
默认下，anchor会添加一些基础的代码。
```rust
// programs/solblog/src/lib.rs

use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod solblog {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
```
程序的公钥默认占位符：
```rust
declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");
```

我们需要重新生成我们自己的公钥。
```bash
cd solblog
anchor build
```
构建完成后，会生成 target 目录
```text
|
├── programs
|   └── solblog
|      └── src
|         └── lib.rs
├── target
|   └── idl
|   └── deploy
|           solblog.so
|           solblog-keypair.json
```

我们生成的新公钥在 solblog-keypari.json 文件中。使用如下命令查看：
```bash
solana address -k ./target/deploy/solblog-keypair.json
```
打印我们程序的唯一key:
```text
BLoG9PtBTkhUbGRAYVe8jzd5ji1G2VPkzwbsRV3bnteD
```

使用这个key,替换我们的程序的key:
```text
declare_id!("SoMeKeyThatIsUniqueTOmyPROGRAM");
```

创建BlogAccount, 存储我们的数据。
```rust
#[account]
pub struct BlogAccount {
    pub anthority: Pubkey,
    pub latest_post: Vec<u8>,
}
```

## 编写rust函数

### Initialize指令
- 构建Initialize指令所需要的数据结构
```rust
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init, // 1. Hey Anchor, initialize an account with these details for me
        payer = authority, // 2. See that authority Signer (pubkey) down there? They're paying for this
        space = 8 // 3.A) all accounts need 8 bytes for the account discriminator prepended to the account
        + 32 // 3.B) authority: Pubkey needs 32 bytes
        + 566 // 3.C) latest_post: post bytes could need up to 566 bytes for the memo
        // You have to do this math yourself, there's no macro for this
    )]
    pub blog_account: Account<'info, BlogAccount>,
    pub authority: Singer<'info>,
    pub system_program: Program<'info, System>,
}
```
- 实现逻辑Initialize指令的逻辑
```rust
#[program]
pub mod solblog{
    use super:*,
    
    // initialize
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let b_p_a = &mut ctx.accounts.blog_account;
        b_p_a.authority = *ctx.accounts.authority.key;
       Ok(())
    }   
}
```

### MakePost指令

- 构建make_post指令所需要的数据
```rust
#[derive(Accounts)]
pub struct MakePost<'inof> {
     #[account(mut, has_one = authority)]
    pub blog_account: Account<'info, BlogAccount>,
    // Also put authority here
    // has_one = authority ensure it was provided as a function arg
    // ensures the poster has the keys
    // has to come after the Account statement above
    // no mut this time, because we don't change authority when we post
    pub authority: Signer<'info>,
}
```

- 实现make_post指令逻辑
```rust
pub fn make_post(ctx: Context<MakePost>, new_post: Vec<u8>) -> ProgramResult {
    let post = from_utf8(&new_post)
        .map_err(|err|{
            msg!("invalid utf-8, from byte {}", err.valid_up_to());
            ProgramError::InvalidInstructionData
        })?;
    msg!(post);
    let b_acc = &mut ctx.accouts.blog_account;
    b_acc.latest_post = new_post;// save the latest post in the account.
    // past posts will be saved in transaction logs
    Ok(())
}
```

我们合约代码已经完成，重新编译程序：
```bash
anchor build
```

## 部署在测试网上

我们需要 2 个 keypair去部署合约：
1. 发起交易的keypair
2. 程序的 keypair

使用 solana-web3.js 生成  Authority keypair。
```js
import { Keypair} from '@solana/web3.js'

let programAuthorityKeypair = new keypair()
```
在测试网上，我们给我们的账号空投一些 sol

```js
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js"

this.connection = new Connection("https://api.devnet.solana.com", "comfirmed")

const signature = await this.connection.requestAirdrop(
        programAuthorityKeypair.publicKey,
        LAMPORTS_PER_SOL * 5
)
await this.connection.confirmTransaction(signature)
const programAuthorityKeyfileName = `deploy/programauthority-keypair.json`
const programAuthorityKeypairFile = path.resolve(
    `${__dirname}${SLASH}${programAuthorityKeyfileName}`
)

// ... [snip]

fs.writeFileSync(
    programAuthorityKeypairFile,
    `[${Buffer.from(programAuthorityKeypair.secretKey.toString())}]`
)
```

## front end

todo