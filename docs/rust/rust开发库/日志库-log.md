# 日志库-log

一般环境

## log

```toml
[dependencies]
log = "0.4"
```

简单使用

```rust
use log::{info,trace, warn};
pub fn do() {
    trace!("a trace log");
    info!("info log");
    warn!("warning log");
}
```



