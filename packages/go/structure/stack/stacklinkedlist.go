package stack

//链表 栈

//节点结构
type Node struct {
	Val  any
	Next *Node
}

//栈的结构,有栈顶和长度
type Stack struct {
	top    *Node
	length int
}

func (ll *Stack) push(n any) {
	newStack := &Node{} //创建新的节点

	newStack.Val = n
	newStack.Next = ll.top //指向原来的栈顶元素

	ll.top = newStack //top移动到最上面
	ll.length++
}

func (ll *Stack) pop() any {
	result := ll.top.Val
	//栈空
	if ll.top.Next == nil {
		ll.top = nil
	} else {
		//移动指针
		ll.top.Val, ll.top.Next = ll.top.Next.Val, ll.top.Next.Next
	}

	ll.length--
	return result
}

func (ll *Stack) isEmpty() bool {
	return ll.length == 0
}

func (ll *Stack) len() int {
	return ll.length
}

//返回顶上元素
func (ll *Stack) peak() any {
	return ll.top.Val
}

//遍历展示栈中元素

func (ll *Stack) show() (in []any) {
	current := ll.top

	for current != nil {
		in = append(in, current.Val)
		current = current.Next
	}

	return
}
