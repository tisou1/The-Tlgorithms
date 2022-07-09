package stack

//数组 栈
var stackArray []any

//push
func stackPush(n any) {
	stackArray = append([]any{n}, stackArray...)
}

//length
func stackLength() int {
	return len(stackArray)
}

//peak
func stackPeak() any {
	return stackArray[0]
}

//empty
func stackEmpty() bool {
	return len(stackArray) == 0
}

//Pop
func stackPop() any {
	pop := stackArray[0]
	stackArray = stackArray[1:]
	return pop
}
