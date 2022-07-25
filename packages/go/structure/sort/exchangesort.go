package sort

import "gp-algorithms/constraints"

//交换排序
func Exchange[T constraints.Ordered](arr []T) []T {
	length := len(arr)
	for i := 0; i < length-1; i++ {
		//不断的吧大的值往后排
		for j := i + 1; j < length; j++ {
			if arr[i] > arr[j] {
				arr[i], arr[j] = arr[j], arr[i]
			}
		}
	}

	return arr
}
