package queue

type Node struct {
	Data any
	Next *Node
}

type Queue struct {
	head   *Node
	tail   *Node
	length int
}

//入队
func (ll *Queue) enqueue(n any) {
	var newNode Node
	newNode.Data = n

	if ll.tail != nil {
		ll.tail.Next = &newNode
	}

	ll.tail = &newNode

	if ll.head == nil {
		ll.head = &newNode
	}

	ll.length++
}

//出队
func (ll *Queue) dequeue() any {
	if ll.isEmpty() {
		return -1
	}

	data := ll.head.Data

	ll.head = ll.head.Next

	if ll.head == nil {
		ll.tail = nil
	}

	ll.length--
	return data
}

//判断是否为空
func (ll *Queue) isEmpty() bool {
	return ll.length == 0
}

//返回长度
func (ll *Queue) len() int {
	return ll.length
}

//返回头部值
func (ll *Queue) frontQueue() any {
	return ll.head.Data
}

//返回尾部值
func (ll *Queue) backQueue() any {
	return ll.tail.Data
}
