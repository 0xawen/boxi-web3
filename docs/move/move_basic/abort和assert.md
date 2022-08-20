# abort 和 assert



`return` 中止函数

`abort` 中止整个tx



### abort

```move
use Std::Vector;
fun pop_twice<T>(v: &mut vector<T>): (T, T) {
    if (Vector::length(v) < 2) abort 42;

    (Vector::pop_back(v), Vector::pop_back(v))
}
```



### assert

```move
assert!(condition: bool, code: u64)
```

由于该操作是一个宏，因此必须使用`!`. 这是为了传达参数`assert`是按表达式调用的。换句话说，`assert`不是一个正常的函数，也不存在于字节码级别。它在编译器内部被替换为

```
if (condition) () else abort code
```

