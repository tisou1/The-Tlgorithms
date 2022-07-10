package queue

import (
	"reflect"
	"testing"
)

func TestQueueArray(t *testing.T) {
	t.Run("Queue with array", func(t *testing.T) {
		EnQueue(111)
		EnQueue(222)

		t.Run("Queue EnQueue", func(t *testing.T) {
			if !reflect.DeepEqual([]any{111, 222}, ListQueue) {
				t.Errorf("队列的enqueue操作出错,期望 %v 实际 %v", []any{111, 222}, ListQueue)
			}
		})

		DeQueue()
		t.Run("Queue DeQueue", func(t *testing.T) {
			if !reflect.DeepEqual([]any{222}, ListQueue) {
				t.Errorf("队列的dequeue操作出错,期望 %v 实际 %v", []any{222}, ListQueue)
			}

			if len(ListQueue) != 1 {
				t.Errorf("队列的dequeue操作出错,期望 %v 实际 %v", 1, len(ListQueue))
			}
		})

	})
}

func TestQueueLinkedList(t *testing.T) {
	t.Run("enqueue", func(t *testing.T) {
		var newQueue Queue
		newQueue.enqueue(111)
		newQueue.enqueue(222)

		if newQueue.frontQueue() != 111 {
			t.Errorf("队列的frontQueue操作出错,期望 %v 实际 %v", 111, newQueue.frontQueue())
		}

	})

	t.Run("dequeue", func(t *testing.T) {
		var newQueue Queue
		newQueue.enqueue(1)
		newQueue.enqueue(2)
		newQueue.enqueue(3)

		newQueue.dequeue()
		if newQueue.dequeue() != 2 {
			t.Errorf("队列的dequeue操作出错,期望 %v 实际 %v", 2, newQueue.dequeue())
		}

	})

	t.Run("length", func(t *testing.T) {
		var newQueue Queue
		newQueue.enqueue(1)

		if newQueue.length != 1 {
			t.Errorf("队列操作的长度出错,期望 %v 实际 %v", 1, newQueue.length)
		}
	})

	t.Run("front and back", func(t *testing.T) {
		var newQueue Queue
		newQueue.enqueue("siry")
		newQueue.enqueue("tisou1")

		if newQueue.frontQueue() != "siry" {
			t.Errorf("队列的frontQueue操作出错,期望 %v 实际 %v", "siry", newQueue.frontQueue())
		}
		if newQueue.backQueue() != "tisou1" {
			t.Errorf("队列的backQueue操作出错,期望 %v 实际 %v", "tisou1", newQueue.backQueue())
		}
	})
}
