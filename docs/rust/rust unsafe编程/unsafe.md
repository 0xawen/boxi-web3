# unsafe 操作

## 不安全的操作汇总

- 解引用裸指针(原始指针)
- 调用不安全的函数或方法
- 访问或修改可变静态变量
- 实现不安全 trait
- 访问 `union` 的字段



## 解引用裸指针

- 创建不可变指针与可变指针

```rust
let mut num = 5;

// 创建不可变指针， 不可变 意味着指针解引用之后不能直接赋值
let r1= &num as *const i32;
// 创建可变指针
let r2 = &mut num as *mut i32;

// 原始的指针解引用需要在 unsafe块中使用
unsafe {
    println!("r1 is {}", *r1);
    println!("r2 is {}", *r2);
}
```



## 调用不安全函数或者方法

```rust
// 不安全函数， 函数前有unsafe标识
unsafe fn dangerout() {}

// 调用不安全的函数需要使用 unsafe 块
unsafe {
    
}
```



## 创建不安全的代码抽象

```rust
// 借用了同一个 slice 两次。
//本质上借用 slice 的不同部分是可以的，因为结果两个 slice 不会重叠，不过 Rust 还没有智能到能够理解这些。
fn split_at_mut(slice: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = slice.len();

    assert!(mid <= len);

    (&mut slice[..mid], &mut slice[mid..])
}
```

```rust
use std::slice;

// 正确使用
fn split_at_mut(slice: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = slice.len();
    let ptr = slice.as_mut_ptr();

    assert!(mid <= len);

    unsafe {
        (
            slice::from_raw_parts_mut(ptr, mid),
            slice::from_raw_parts_mut(ptr.add(mid), len - mid),
        )
    }
}
```





## 使用extern函数调用外部代码

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    // 调用外部函数被视为不安全操作
    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }
}
```



## 访问或者修改可变静态变量

- 静态变量(static)  -> 全局变量

常量与不可变静态变量可能看起来很类似，不过一个微妙的区别是静态变量中的值有一个固定的内存地址。使用这个值总是会访问相同的地址。另一方面，常量则允许在任何被用到的时候复制其数据。

常量与静态变量的另一个区别在于静态变量可以是可变的。访问和修改可变静态变量都是 **不安全** 的。



```rust
// 演示静态变量的修改
// 定义一个可变的静态变量
static mut COUNTER: u32 = 0;

fn add_to_count(inc: u32) {
    unsafe {
        COUNTER += inc;
    }
}

fn main() {
    // 多个线程访问 COUNTER 则可能导致数据竞争。
    add_to_count(3);

    unsafe {
        println!("COUNTER: {}", COUNTER);
    }
}
```



## 实现不安全的 trait

```rust
unsafe trait Foo {
    // methods go here
}

unsafe impl Foo for i32 {
    // method implementations go here
}

fn main() {}
```



## 访问联合体中的字段

联合体主要用于和 C 代码中的联合体交互。访问联合体的字段是不安全的，因为 Rust 无法保证当前存储在联合体实例中数据的类型。