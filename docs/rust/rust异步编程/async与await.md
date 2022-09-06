# async与await使用

需要引入`futures`包

```toml
[dependencies]
futures = "0.3"
```

## async创建异步函数

```rust
async fn sys_hello() {
    println!("hello, world!");
}
```

异步函数使用需要引入执行器才可以运行

```rust
// `block_on`会阻塞当前线程直到指定的`Future`执行完成，。
use futures::executor::block_on;

async fn sys_hello() {
    println!("hello, world!");
}

fn main() {
    let future = sys_hello(); // 返回一个Future, 因此不会打印任何输出
    block_on(future); // 执行`Future`并等待其运行完成，此时"hello, world!"会被打印输出
}
```

## await使用

在一个异步函数`async fn `中调用另一个异步函数`async fn` ,并等待其执行完成在去运行剩下的代码。例如：

```rust
use futures::executor::block_on;

async fn hello_world() {
    println!("hello, world!");
}

async fn hello_rust() {
    // 我们先执行 hello_world 异步函数， 然后再执行 hello_rust 剩下的代码。
    // await 就是等待 hello_world 完成。
    hello_world().await;
     println!("hello, rust!");
}

fn main() {
    let future = hello_world();
    block_on(future);
}
```

