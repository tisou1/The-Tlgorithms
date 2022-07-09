package stack

import (
	"container/list"
	"fmt"
)

// SList is our struct that point to stack with container/list.List library
type SList struct {
	stack *list.List
}

func (sl *SList) Push(val any) {
	sl.stack.PushFront(val)
}

//peak
func (sl *SList) Peak() (any, error) {
	if !sl.Empty() {
		element := sl.stack.Front()
		return element.Value, nil
	}
	return "", fmt.Errorf("stack is empty")
}

//pop

func (sl *SList) Pop() (any, error) {
	if !sl.Empty() {
		element := sl.stack.Front()
		sl.stack.Remove(element)
		return element.Value, nil
	}
	return "", fmt.Errorf("stack is empty")
}

func (sl *SList) Length() int {
	return sl.stack.Len()
}

func (sl *SList) Empty() bool {
	return sl.stack.Len() == 0
}
