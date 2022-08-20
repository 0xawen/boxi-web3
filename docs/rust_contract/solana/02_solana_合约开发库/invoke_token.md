# 调用token合约

### 如何使用标准 SPL-Tokens

```tsx
"@solana/spl-token": "^0.2.0"
```

### 如何创建一个 token

```tsx
import {
  clusterApiUrl,
  Connection,
  Keypair,
  Transaction,
  SystemProgram,  
} form "@solana/web3.js";

import {
  createInitializeMintInstruction,
  TOKEN_PROGRAM_ID,
  MINT_SIZE,
  getMinimumBalanceForRentExemptMint,
  createMint,
} from "@solana/spl-token";

import * as bs58 from "bs58";

()
```

