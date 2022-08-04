import { vi, expect, it, describe, beforeEach } from 'vitest'
import { Graph2 } from '../graph2'

describe('Test graph2', () => {
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F']
  const graph = new Graph2(vertices.length)

  // adding vertices
  for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i])
  }

    // adding edges
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'D')
    graph.addEdge('A', 'E')
    graph.addEdge('B', 'C')
    graph.addEdge('D', 'E')
    graph.addEdge('E', 'F')
    graph.addEdge('E', 'C')
    graph.addEdge('C', 'F')
  
    
  it('check one', () => {
    const mockFn = vi.fn()
    graph.printGraph(mockFn)

    //函数被调用的次数
    expect(mockFn.mock.calls.length).toBe(vertices.length)
    //mock.calls是包含每个调用的所有参数的数组
    const adjListArr = mockFn.mock.calls.map( v => v[0])
    expect(adjListArr).toMatchSnapshot()

    expect(adjListArr).toEqual([
      'A -> B D E ',
      'B -> A C ',
      'C -> B E F ',
      'D -> A E ',
      'E -> A D F C ',
      'F -> E C '
    ])
  })
})