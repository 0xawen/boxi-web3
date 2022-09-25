# 类型转换-From和Into

A类型 <-> B类型



## From

A -> B

```rust
use std::convert::From;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl From<i32> fro Number {
    fn from(item: i32) -> Self {
        Number {value: item}
    }
}

fn main() {
    let num = Number::from(30);
    println!("My number is {:?}", num);
}
```

 

## Into

[`Into`](https://rustwiki.org/zh-CN/std/convert/trait.Into.html) trait 就是把 `From` trait 倒过来而已。也就是说，如果你为你的类型实现了 `From`，那么同时你也就免费获得了 `Into`。



```rust
use std::convert::From;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl From<i32> for Number {
    fn from(item: i32) -> Self {
        Number { value: item }
    }
}

fn main() {
    let int = 5;
    // 试试删除类型说明
    let num: Number = int.into();
    println!("My number is {:?}", num);
}

```

