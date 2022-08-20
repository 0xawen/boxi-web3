# 结构体

您可以通过创建结构来定义自己的类型。

它们对于将相关数据分组在一起很有用。

结构可以在合约之外声明并在另一个合约中导入。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Todos {
	struct Todo {
		string text;
		bool completed;
	}
	
	Todo[] public todos;
	
	function create(string calldata _text) public {
		// 3 种方式 初始化 结构体
		// 像调用函数一样使用
		todos.pubh(Todo(_text, false));
		
		// key value 
		todos.pubhs(Todo({text: _text, completed: false}));
		
		// 初始化一个空的结构体 同时更新
		Todo memory todo;
		todo.text = _text;
		todos.push(todo);
	}
	
	// solidity 会为todos自动创建一个 get
	function get(uint _index) public view returns (string memory text, bool completed){
		Todo storage todo = todos[_index];
		return (todo.text, todo.completed);
	}
}
```

