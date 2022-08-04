


export class Graph2<T = unknown> {
  noOfVertices: T[]
  AdjList: Map<T, T[]>

  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
  }

  //添加顶点
  addVertex(v: T) {
    this.AdjList.set(v, [])
  }
  //添加线
  addEdge(v: T, w: T) {
    this.AdjList.get(v)?.push(w)

    this.AdjList.get(w)?.push(v)
  }

  printGraph(output = (value: string) => console.log(value)){
    const getKeys = this.AdjList.keys()

    for(const i of getKeys) {
      const getValue = this.AdjList.get(i)
      let conc = ''

      for(const j of getValue as T[]) {
        conc += j + ' '
      }

      output(i + ' -> ' + conc)
    }
  }
}