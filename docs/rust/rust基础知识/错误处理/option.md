# option



## option与unwrap/expect

- Some(T)
- None

```rust
fn give_princess(gift: Option<&str>) {
    // unwrap 再接收到 None 是返回panic
    let inside = gift.unwrap();
    println!("I love {}s!!!!!", inside);
}
```



## 使用 `？`解开Option

```rust
fn next(current_age: Option<u8>) -> Option<String> {
    // 如果 `current_age` 是 `None`，这将返回 `None`。
    // 如果 `current_age` 是 `Some`，内部的 `u8` 将赋值给 `next_age`
	let next_age: u8 = current_age?;
    Some(format!("Next year I will be {}", next_age))
}

```

多个`?`链接使用

```rust
struct Person {
    job: Option<Job>,
}

#[derive(Clone, Copy)]
struct Job {
    phone_number: Option<PhoneNumber>,
}

#[derive(Clone, Copy)]
struct PhoneNumber {
    area_code: Option<u8>,
    number: u32,
}

impl Person {
    fn work_phone_area_code(&self) -> Option<u8> {
        // 没有`？`运算符的话，这将需要很多的嵌套的 `match` 语句。
        self.job?.phone_number?.area_code
    }
}
```



## option 与 map

`Option` 有一个内置方法 `map()`，这个组合算子可用于 `Some -> Some` 和 `None -> None` 这样的简单映射。多个不同的 `map()` 调用可以串起来，这样更加灵活。

```rust
// todo
```



## option 与 and_then

`and_then()` 使用被 `Option` 包裹的值来调用其输入函数并返回结果。 如果 `Option` 是 `None`，那么它返回 `None`。



```rust
// todo
```

