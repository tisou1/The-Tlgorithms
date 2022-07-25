/**
 * 平衡二叉树: 任意节点对应的两颗子树的最大高度差为1
 * 
 */

type NodeT<T> = {
  _val: T
  _left: NodeT<T> | null
 _right:NodeT<T> | null
 _height: number
}
type BalanceFactor = 0 | 1 | -1
/**
 * comparator函数
 */
let utils;
(function (_utils) {
  function comparator() {
    return function (v1, v2){
      if(v1 < v2) return -1
      if(v1 > v2) return 1
      return 0
    }
  }
  _utils.comparator = comparator
})(utils || (utils = {}))

/**
 * 
 */
const AVLTree = (function () {
  function _avl(comp?: (...args: unknown[]) => void) {
    this._comp = undefined
    this._comp = comp !== undefined ? comp : utils.comparator()
    //树的根节点
    this.root = null
    //树的节点数
    this.size = 0
  }

  //树的节点 构造函数
  const Node = function<T> (val: T) {
    this._val = val
    this._left = null
    this._right = null
    this._height = 1
  }

  //获取权重
  const getHeight = function<T> (node: NodeT<T> | null){
    if(node === null) return 0
    return node._height
  }
  //获取当前节点的平衡差
  const getHeightDifference = function<T> (node: NodeT<T> | null) {
    return node === null ? 0 : getHeight(node._left) - getHeight(node._right)
  }

  //更新
  const updateHeight = function<T> (node: NodeT<T> | null) {
    if(node === null) return
    node._height = Math.max(getHeight(node._left), getHeight(node._right)) + 1
  }
  //检查是否为平衡的
  const isValidBalanceFactor = (balanceFactor: number) => [0, 1, -1].includes(balanceFactor)

  //旋转avl树
  /**
   * 1. 节点的右孩子代替此位置
   * 2. 右孩子的左子树变为该节点的右子树
   * 3. 节点本身变为右孩子的左子树
   * @param node 
   * @returns 
   */
  const leftRotate = function<T> (node: NodeT<T>) {
      const temp = node._right
      //2.
      node._right = temp!._left
      //3.
      temp!._left = node
      updateHeight(node)
      updateHeight(temp)
      return temp
  }
  /**
   * 1. 节点的左孩子替代此位置
   * 2. 左孩子的右子树变为该节点的左子树
   * 3. 节点本身成为左子树的右子树
   * @param node 
   */
  const rightRotate  = function<T> (node: NodeT<T>) {
    const temp = node._left
    //2.
    node._left = temp!._right
    //3.
    temp!._right = node
    updateHeight(node)
    updateHeight(temp)
    return temp
  }

  //检查树是否是平衡的,否则进行平衡插入
  const insertBalance = function<T> (node: NodeT<T>, _val: T, balanceFactor: number) {
    if(balanceFactor > 1 && _val < node._left!._val) {
      return rightRotate(node) //left left case
    }
    if(balanceFactor < 1 && _val > node._right!._val) {
      return leftRotate(node)//right right case
    }
    if(balanceFactor > 1 && _val > node._left!._val) {
      node._left = leftRotate(<NodeT<T>>node._left)  //left right case
      return rightRotate(node)
    }
    node._right = rightRotate(<NodeT<T>>node._right)
    return leftRotate(node) //right left
  }

  //删除后是否是平衡
  const delBalance = function <T> (node: NodeT<T>) {
    const baclanceFactor1 = getHeightDifference(node)
    if(isValidBalanceFactor(baclanceFactor1)) {
      return node
    }
    if(baclanceFactor1 > 1) {//左边大 右旋
      if(getHeightDifference(node._left) >= 0) {
        return rightRotate(node)//left left
      }
      node._left = leftRotate(node._left as NodeT<T>)
      return rightRotate(node) //let right
    }
    if(getHeightDifference(node._right) > 0) {//左旋
      node._right = rightRotate(node._right as NodeT<T>)
      return leftRotate(node)// right left
    }
    return leftRotate(node) //right right
  }
   

  //avl树的插入
  const insert = function<T>(root: NodeT<T>, val: T, tree) {
    if(root === null) {
      tree.size++
      return new Node(val)
    }
    if(tree._comp(root._val, val) < 0) {
      root._right = insert(root._right as NodeT<T>, val, tree)
    } else if(tree._comp(root._val, val) > 0) {
      root._left = insert(root._left as NodeT<T>, val, tree)
    } else {
      return root
    }
    updateHeight(root)
    const balanceFactor = getHeightDifference(root)
    return isValidBalanceFactor(balanceFactor) ? root : insertBalance(root, val, balanceFactor)
  }


  //删除元素
  const deleteElement = function<T>(root: NodeT<T> | null, _val: T, tree) {
    if(root === null) return root
    if(tree._comp(root._val, _val) === 0) {
      if(root._left === null && root._right === null) {
        root = null
        tree.size--
      } else if(root?._left === null) {
        root = root._right
        tree.size--
      } else if(root._right === null) {
        root = root._left
        tree.size--
      } else {
        let temp = root._right
        while(temp._left != null) {
          temp = temp._left
        }
        root._val = temp._val
        root._right = deleteElement(root._right, temp._val, tree)
      }
    } else {
      if(tree._comp(root._val, _val) < 0) {
        root._right = deleteElement(root._right, _val, tree)
      } else {
        root._left = deleteElement(root._left, _val, tree)
      }
    }
    updateHeight(root)
    root = delBalance(root as NodeT<T>)
    return root
  }

  const searchAVLTree = function<T> (root, val, tree) {
    if(root === null) return null
    if(tree._comp(root._val, val) === 0) {
      return root
    } 
    if(tree._comp(root._val, val) < 0) {
      return searchAVLTree(root._right, val, tree)
    }
    return searchAVLTree(root._left, val, tree)
  }


  //实例方法
  _avl.prototype.add = function<T> (_val: T) {
    const prevSize = this.size
    this.root = insert(this.root, _val, this)
    return this.size !== prevSize
  }

  _avl.prototype.find = function<T> (_val: T) {
    const temp = searchAVLTree(this.root, _val, this)
    return temp != null
  }


  _avl.prototype.remove = function<T> (_val: T){
    const prevSize = this.size
    this.root = deleteElement(this.root, _val, this)
    return prevSize !== this.size
  }

  return _avl

})()


export { AVLTree }