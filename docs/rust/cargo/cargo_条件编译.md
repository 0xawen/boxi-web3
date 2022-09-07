# cargo条件编译



## [features]

```rust
// cargo.toml
[features]
webp = []
```

```rust
#[cfg(feature = "webp")]
pub mod webp;
```

