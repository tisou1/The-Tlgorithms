
type AdjacencyMap<T, V = unknown[]> = {
  any?: V
}

export class Graph<T> {
  adjacencyMap: AdjacencyMap<any>
  constructor() {
    this.adjacencyMap = {}
  }

  addVertes (vertex: any) {
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


  dfs(source, visited = new Set(), output = (value: any) => console.log(value)) {
    if(visited.has(source)) {
      return
    }

    output(`Visited node ${source}`)
    for(const neighbour of this.adjacencyMap[source]) {
      this.dfs(neighbour, visited, output)
    }
  }
  
}

