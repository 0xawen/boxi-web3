# result

### Result

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

#### 返回错误

- ？的错误使用

```rust

// ? 操作符需要一个变量来承载正确的值. ？ 用于一下形式
let v = xxx()?;
xxx()?.yyy()?;
```

使用实例：

```rust
use std::fs::File;
use std::io;
use std::io::Read;

fn read_username_from_file() -> Result<String, io::Error> {
    let mut s = String::new();
    
    File::open("hello.txt")?.read_to_string(&mut s)?;
    Ok(s)
}
```

```rust
// 骚操作
use std::fs;
use std::io;

fn read_unsername_from_file() -> Result<String, io::Error> {
    fs::read_to_string("hello.txt")
}
```
