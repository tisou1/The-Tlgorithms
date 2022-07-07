package basic

import "fmt"

func fQueue() {
	queue := make([]int, 0)

	queue = append(queue, 10)

	v := queue[0]
	queue = queue[1:]

	fmt.Println(len(queue) == 0)
	fmt.Println(v)
}
