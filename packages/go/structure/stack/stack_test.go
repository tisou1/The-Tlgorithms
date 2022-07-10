package stack

import (
	"container/list"
	"fmt"
	"reflect"
	"testing"
)

func Hello() {
	fmt.Println("Hello, World!")
}

//array类型stack测试
func TestStackArray(t *testing.T) {
	t.Run("Stack With Array", func(t *testing.T) {

		stackPush(2)
		stackPush(3)

		t.Run("Stack Push", func(t *testing.T) {
			if !reflect.DeepEqual([]any{3, 2}, stackArray) {
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
			if stackEmpty() {
				t.Errorf("栈的empty操作出错,期望 %v 实际 %v", false, stackEmpty())
			}

			stackPop()
			stackPop()
			stackPop()

			if !stackEmpty() {
				t.Errorf("栈的empty操作出错,期望 %v 实际 %v", true, stackEmpty())
			}
		})

	})
}

//节点stack测试函数
func TestStackNode(t *testing.T) {
	var newStack Stack
	newStack.push(1)
	newStack.push(2)

	t.Run("Stack Push", func(t *testing.T) {
		result := newStack.show()
		expect := []any{2, 1}
		for x := range result {
			if result[x] != expect[x] {
				t.Errorf("栈的push操作出错,期望 %v 实际 %v", expect, result)
			}
		}
	})

	t.Run("Stack empty", func(t *testing.T) {
		if newStack.len() != 2 {
			t.Errorf("栈的empty操作出错,期望 %v 实际 %v", 2, newStack.len())
		}
	})

	newStack.pop()
	pop := newStack.pop()
	t.Run("Stack Pop", func(t *testing.T) {
		if pop != 1 {
			t.Errorf("栈的pop操作出错,期望 %v 实际 %v", 1, pop)
		}
	})

	newStack.push(3)
	newStack.push(4)
	newStack.push(5)
	t.Run("Stack Peak", func(t *testing.T) {
		if newStack.peak() != 2 {
			t.Error("栈的peak操作出错,顶部为5,实际得到", newStack.peak())
		}
	})
}

//list库的stack测试函数
func TestStackLinkedListWithList(t *testing.T) {
	stackList := &SList{
		stack: list.New(),
	}

	t.Run("Stack Push", func(t *testing.T) {
		stackList.Push(2)
		stackList.Push(3)

		if stackList.Length() != 2 {
			t.Errorf("栈的push操作出错,期望 %v 实际 %v", 2, stackList.Length())
		}
	})

	t.Run("Stack Pop", func(t *testing.T) {
		pop, _ := stackList.Pop()

		if stackList.Length() != 1 && pop != 3 {
			t.Errorf("栈的pop操作出错,期望 %v 实际 %v", 3, pop)
		}
	})

	t.Run("Stack Peak", func(t *testing.T) {
		stackList.Push(2)
		stackList.Push(83)

		peak, _ := stackList.Peak()
		if peak != 83 {
			t.Errorf("栈的peak操作出错,期望 %v 实际 %v", 83, peak)
		}
	})

	t.Run("Stack Length", func(t *testing.T) {
		if stackList.Length() != 3 {
			t.Errorf("栈的length操作出错,期望 %v 实际 %v", 3, stackList.Length())
		}
	})

	t.Run("Stack Empty", func(t *testing.T) {
		if stackList.Empty() {
			t.Errorf("栈的empty操作出错,期望 %v 实际 %v", false, stackList.Empty())
		}

		d1, err := stackList.Pop()
		d2, _ := stackList.Pop()
		d3, _ := stackList.Pop()

		if err != nil {
			t.Errorf("got an unexpected error %v, pop1: %v, pop2: %v, pop3: %v", err, d1, d2, d3)
		}

		if !stackList.Empty() {
			t.Errorf("栈的empty操作出错,期望 %v 实际 %v", true, stackList.Empty())
		}
	})
}
