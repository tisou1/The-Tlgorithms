package sort

import "gp-algorithms/constraints"

//冒泡排序

func Bubble[T constraints.Ordered](arr []T) []T {
	swapped := true
	//这里也可以加入i < len(arr)的限制
	for swapped {
		//打入标记
		swapped = false
		for i := 0; i < len(arr)-1; i++ {
			if arr[i] > arr[i+1] {
				arr[i], arr[i+1] = arr[i+1], arr[i]
				swapped = true
			}
		}
	}
	return arr
}
