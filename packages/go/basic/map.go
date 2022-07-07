package basic

import "fmt"

func fMap() {
	m := make(map[string]int)
	m["name"] = 123

	delete(m, "name")

	for k, v := range m {
		fmt.Println(k, v)
	}
}
