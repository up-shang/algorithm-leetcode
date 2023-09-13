/**
 * 通用列表转树形结构
 * O(n)
 * @param {*} list
 * @param {*} treeProps
 * @param {*} hasEmptyChildren
 * @returns
 */
export default function listToTree(list, treeProps, hasEmptyChildren = true) {
  if (!list || list.length === 0 || list.every(v => typeof v !== 'object')) return []
  // 默认deafult props
  const defaultProps = {
    idKey: 'id',
    parentIdKey: 'parentId',
    childrenKey: 'children',
    rootParentId: null
  }
  const props = Object.assign({}, defaultProps, treeProps)
  // 把原数组转换为hashMap结构
  const group = {}
  list.forEach(item => {
    if (hasEmptyChildren) {
      item[props.childrenKey] = []
    }
    group[item[props.idKey]] = item
  })
  const result = list.filter(item => {
    const parentId = item[props.parentIdKey]
    if (parentId !== props.rootParentId) {
      try {
        if (!group[parentId][props.childrenKey]) {
          group[parentId][props.childrenKey] = []
        }
        group[parentId][props.childrenKey].push(item)
      } catch (e) {
        console.warn(`脏数据！不存在上级节点 {${props.idKey}: ${parentId} ...}, 当前节点：`, item)
      }
      return false
    }
    return true
  })
  return result
}
