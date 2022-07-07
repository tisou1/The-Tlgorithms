package basic

import (
	"fmt"
	"sort"
)

func fSort() {
	var a = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	sort.Ints(a)
	fmt.Println(a)

	b := []string{"a", "b", "c", "d", "e", "f", "g", "h", "i", "j"}
	sort.Strings(b)
	fmt.Println(b)

	c := []string{"a", "b", "c", "d", "e", "f", "g", "h", "i", "j"}
	sort.Sort(sort.Reverse(sort.StringSlice(c)))
}
