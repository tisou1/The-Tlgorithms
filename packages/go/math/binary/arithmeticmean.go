package binary

//使用向右位移
func MeanUsingRightShift(a, b int) int {
	return (a + b) >> 1
}

//异或(相同为0, 不同为1) 与(都为1才是1) 向右移动
func MeanUsingAndXor(a, b int) int {
	return ((a ^ b) >> 1) + (a & b)
}
