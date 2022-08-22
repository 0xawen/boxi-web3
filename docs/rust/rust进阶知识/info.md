# 进阶知识点概述

- 深入类型系统
  - newtype 和 类型别名
  - sized 和 不定长DST
  - 枚举和整数

- 智能指针
  - Box堆分配对象
  - Deref解应用
  - Drop释放资源
  - Rc与Arc
  - Cell 与 RefCell 内部可变性
  
- 生命周期
  - 深入生命周期（少见的特性）
  - &‘static 和 T: 'static

- 函数式编程
  - 闭包
  - 迭代器

- 循环引用和自引用
  - weak 与 循环引用
  - 结构体中的自引用

- 全局变量
- 高级错误处理
- 宏编程


- Rust 难点(容易混淆)

  - 切片和切片引用
  - Eq 和 PartialEq
  - String, &str 和 str
  - 作用域，生命周期 和 NLL
  - move ，copy 和 clone
  - 裸指针，引用 和智能指针
- Unsafe 编程