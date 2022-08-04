
type AdjacencyMap<T, V = unknown[]> = {
  any?: V
}

export class Graph<T> {
  adjacencyMap: AdjacencyMap<any>
  constructor() {
    this.adjacencyMap = {}
  }

  addVertex (vertex: any) {
    this.adjacencyMap[vertex] = []
  }

  containsVertex(vertex: any) {
    return typeof (this.adjacencyMap[vertex]) !== 'undefined'
  }

  addEdge(vertex1: any, vertex2: any) {
    if(this.containsVertex(vertex1) && this.containsVertex(vertex2)) {
      this.adjacencyMap[vertex1].push(vertex2)
      this.adjacencyMap[vertex2].push(vertex1)
    }
  }

  printGraph(output: (arg: unknown) => void = (value: unknown) => console.log(value)) {
    const keys = Object.keys(this.adjacencyMap)
    for(const i of keys) {
      const values = this.adjacencyMap[i]
      let vertex = ''
      for(const j of values) {
        vertex += j + ' '
      }
      output(i + ' -> ' + vertex)
    }
  }

//深度遍历
  dfs(source, visited = new Set(), output = (value: any) => console.log(value)) {
    if(visited.has(source)) {
      return
    }

    output(`Visited node ${source}`)
    visited.add(source)
    for(const neighbour of this.adjacencyMap[source]) {
      this.dfs(neighbour, visited, output)
    }
  }

//广度遍历
  bfs(source, output = (value: unknown) => console.log(value)) {
    const queue: number[][] = [[source, 0]]
    const visited = new Set()

    while(queue.length) {
      const [ node, level ] = queue.shift() as number[]
      if(visited.has(node)) continue

      visited.add(node)
      output(`Visited node ${node} at level ${level}`)
      for(const next of this.adjacencyMap[node]) {
        queue.push([next, level + 1])
      }
    }
  }
  
}

