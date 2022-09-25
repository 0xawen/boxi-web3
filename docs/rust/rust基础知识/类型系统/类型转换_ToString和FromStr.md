# 类型转换-ToString 和 FromStr

要把任何类型转换成 `String`，只需要实现那个类型的 `ToString`trait。然而不要直接这么做，您应该实现`fmt::Display` trait，它会自动提供 `ToString`



## ToString

```rust
use std::fmt;

struct Circle {
    radius: i32
}

impl fmt::Display for Circle {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Circle of radius {}", self.radius)
    }
}
fn main() {
    let circle = Circle { radius: 6 };
    println!("{}", circle.to_string());
}
```



## 解析字符串



只要对目标类型实现了 `FromStr`trait，就可以用 `parse` 把字符串转换成目标类型。 

```rust
fn main() {
    let parsed: i32 = "5".parse().unwrap();
    let turbo_parsed = "10".parse::<i32>().unwrap();

    let sum = parsed + turbo_parsed;
    println!{"Sum: {:?}", sum};
}
```

