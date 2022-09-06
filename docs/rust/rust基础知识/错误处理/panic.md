## panic

直接调用panic

```rust
fn main() {
    panic!("xxx");
}
```

## 会panic的函数

- unwrap() 
- expect()

```rust
// unwrap 如果Ok, 返回Ok的值， 如果Err,则调用panic
// expect 出错则直接panic
// ? 出错则直接返回错误
use std::fs::File;
use std::io;
use std::io::Read;

fn read_unsename_from_file() -> Result<String, io::Error> {
    let mut s = String::new();
    
    File::open("hello.txt")?.read_to_string(&mut s)?;
}
```

