package sort

import "gp-algorithms/constraints"

func Partition[T constraints.Ordered](arr []T, low, high int) int {
	index := low - 1
	pivotElement := arr[high]
	for i := low; i < high; i++ {
		if arr[i] <= pivotElement {
			index += 1
			arr[index], arr[i] = arr[i], arr[index]
		}
	}
	arr[index+1], arr[high] = arr[high], arr[index+1]
	return index + 1
}

func QuicksortRange[T constraints.Ordered](arr []T, low, high int) {
	if len(arr) <= 1 {
		return
	}

	if low < high {
		pivot := Partition(arr, low, high)
		QuicksortRange(arr, low, pivot-1)
		QuicksortRange(arr, pivot+1, high)
	}
}

func Quicksort[T constraints.Ordered](arr []T) []T {
	QuicksortRange(arr, 0, len(arr)-1)
	return arr
}
