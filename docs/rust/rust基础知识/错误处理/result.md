# result

https://rustwiki.org/zh-CN/std/result/enum.Result.html

### Result

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```



#### 提前返回错误`?`

```rust
use std::num::ParseIntError;

fn multiply(first_number_str: &str, second_number_str: &str) -> Result<i32, ParseIntError> {
    let first_number = first_number_str.parse::<i32>()?;
    let second_number = second_number_str.parse::<i32>()?;

    Ok(first_number * second_number)
}

fn print(result: Result<i32, ParseIntError>) {
    match result {
        Ok(n)  => println!("n is {}", n),
        Err(e) => println!("Error: {}", e),
    }
}

fn main() {
    print(multiply("10", "2"));
    print(multiply("t", "2"));
}
```

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
