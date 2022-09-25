# 类型转换 - as

rust不提供隐式转换，一般使用显式转换。

考虑精度问题

###  as 转换

```rust
// as 一般是数值上处理
fn main() {
    let a = 3.1 as i8;
    let b = 100_i8 as i32;
    let c = 'a' as u8;
}
```

### 整数转换为枚举

```rust
enum MyEnum {
    A = 1,
    B,
    C
}

fn main() {
    // 将枚举转换成整数
    let x = MyEnum::C as i32;
    
    // 整数到枚举 
    match x.try_into() {
        Ok(MyEnum::A) => println!("a"),
        Ok(MyEnum::B) => println!("b"),
        Ok(MyEnum::C) => println!("c"),
        Err(_) => eprintln!("unknown number"),
    }

}

use std::convert::TryFrom;

impl TryFrom<i32> for MyEnum {
    type Error = ();

    fn try_from(v: i32) -> Result<Self, Self::Error> {
        match v {
            x if x == MyEnum::A as i32 => Ok(MyEnum::A),
            x if x == MyEnum::B as i32 => Ok(MyEnum::B),
            x if x == MyEnum::C as i32 => Ok(MyEnum::C),
            _ => Err(()),
        }
    }
}
```



## 点操作符中的类型转换

方法调中的点调用流程：（`self`, `&self`, `&mut self`）

1. 首先，编译器尝试**值调用**： `T::Foo(value)`
2. 其次，尝试**引用调用**： `<&T>::foo(value)`,  `<&mut T>::foo(value)`
3. 再次， 尝试**解引用调用**：`T: Defef<Target = U>` 尝试使用U类型尝试
4. 若 `T` 不能被解引用，且 `T` 是一个定长类型(在编译器类型长度是已知的)，那么编译器也会尝试将 `T` 从定长类型转为不定长类型，例如将 `[i32; 2]` 转为 `[i32]`
5. 最后都不行，那么报错。

