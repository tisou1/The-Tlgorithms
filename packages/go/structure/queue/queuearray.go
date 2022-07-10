package queue

var ListQueue []any

//入队
func EnQueue(n any) {
	ListQueue = append(ListQueue, n)
}

//出队
func DeQueue() any {
	if len(ListQueue) == 0 {
		return nil
	}
	n := ListQueue[0]
	ListQueue = ListQueue[1:]
	return n
}

//FrontQueue 返回第一个元素
func FrontQueue() any {
	return ListQueue[0]
}

//BackQueue 返回最后一个元素
func BackQueue() any {
	return ListQueue[len(ListQueue)-1]
}

//返回长度
func LengthQueue() int {
	return len(ListQueue)
}

//判断是否为空
func IsEmptyQueue() bool {
	return len(ListQueue) == 0
}
