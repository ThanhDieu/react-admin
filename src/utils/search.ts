import { AnyObject } from 'antd/es/_util/type'

const searchAllField = <T>(terms: string, items: T[]) => {
  if (!Array.isArray(items)) return []
  return items.filter((item) => {
    const values = Object.values(item as AnyObject)
    const stringfiedValues = JSON.stringify(values).toLowerCase()
    return stringfiedValues.match(terms)
  })
}
export { searchAllField }
