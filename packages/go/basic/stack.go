package basic

import "fmt"

func fStack() {
	// 栈

	//创建栈
	stack := make([]int, 0)

	//push压入
	stack = append(stack, 10)
	//pop弹出
	v := stack[len(stack)-1]
	stack = stack[:len(stack)-1]
	//检查栈空
	fmt.Println(len(stack) == 0)

	//防止报错的打印
	fmt.Println(stack)
	fmt.Println(v)

}
