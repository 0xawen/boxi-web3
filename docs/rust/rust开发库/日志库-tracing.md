# 日志库-tracing

生产环境使用

## 基本使用

```toml
[dependencies]
tracing = "0.1"
```

```rust
use tracing_subscriber::{fmt, layer:SubscriberExt, util::SubscriberInitExt};

fn main() {
    // 注册
    tracing_subscriber::registry()
    	.with(fmt::layer())
    	.init();
   
    tracing::info!(foo, "Hello from tracing");
}
```

