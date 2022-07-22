export interface NodeT<T> {
  data: T
  next: NodeT<T> | null
}


export type DoubleNode<T> = {
  data: T
  next: DoubleNode<T> | null
  prev: DoubleNode<T> | null
}