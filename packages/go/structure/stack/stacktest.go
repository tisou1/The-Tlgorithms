package stack

import (
	"fmt"
	"reflect"
	"testing"
)

func main() {
	fmt.Println("Hello World")
}

func TestStackArray(t *testing.T) {
	t.Run("Stack With Array", func(t *testing.T) {

		stackPush(2)
		stackPush(3)

		t.Run("Stack Push", func(t *testing.T) {
			if !reflect.DeepEqual([]any{2, 3}, stackArray) {
				t.Errorf("栈的push操作出错,期望 %v 实际 %v", []any{3, 2}, stackArray)
			}
		})

		pop := stackPop()
		t.Run("Stack Pop", func(t *testing.T) {

			if stackLength() == 2 && pop != 3 {
				t.Errorf("栈的pop操作出错,期望 %v 实际 %v", 3, pop)
			}
		})

		stackPush(2)
		stackPush(83)

		t.Run("Stack Peak", func(t *testing.T) {
			if stackPeak() != 83 {
				t.Errorf("栈的peak操作出错,期望 %v 实际 %v", 83, stackPeak())
			}
		})

		t.Run("Stack Length", func(t *testing.T) {
			if stackLength() != 3 {
				t.Errorf("栈的length操作出错,期望 %v 实际 %v", 3, stackLength())
			}
		})

		t.Run("Stack Empty", func(t *testing.T) {
			if stackEmpty() == true {
				t.Errorf("栈的empty操作出错,期望 %v 实际 %v", false, stackEmpty())
			}

			stackPop()
			stackPop()
			stackPop()

			if stackEmpty() == false {
				t.Errorf("栈的empty操作出错,期望 %v 实际 %v", true, stackEmpty())
			}
		})

	})
}
