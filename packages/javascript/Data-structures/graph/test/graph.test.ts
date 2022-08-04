import { expect, it, describe, beforeEach } from 'vitest'
import { Graph } from '../graph'

describe('graph', () => {
  let g: any
  beforeEach(() => {
    g = new Graph()
  })


  it(' check one ', () => {
    g.addVertex(1)
    g.addVertex(2)
    g.addVertex(3)
    g.addVertex(4)
    g.addVertex(5)
    g.addEdge(1, 2)
    g.addEdge(1, 3)
    g.addEdge(2, 4)
    g.addEdge(2, 5)

    // Breadth first search at node 1
    g.bfs(1)

    // Depth first search at node 1
    g.dfs(1)
  })
})