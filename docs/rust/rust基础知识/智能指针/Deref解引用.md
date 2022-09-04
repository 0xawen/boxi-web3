# Deref 解引用

## 常规的引用与解引用

```rust
fn main() {
    let x = 5;
    let y = &x;  // 对x取出地址 赋值给 y, 则y 指向了x.

    assert_eq!(5, x);
    assert_eq!(5, *y);  // 对 y 进行解引用 
}
```

## 智能指针的引用与解引用

```rust
fn main() {
    let x = Box::new(1);
    let sum = *x + 1;   // * 直接解引用  =>  *(y.deref())
}
```





`Deref` 可以说是 Rust 中最常见的隐式类型转换，而且它可以连续的实现如 `Box<String> -> String -> &str` 的隐式转换，只要链条上的类型实现了 `Deref` 特征。