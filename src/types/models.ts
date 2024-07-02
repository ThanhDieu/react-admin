export interface IBaseData {
  id?: string
  name?: string
  createdAt?: number
  updatedAt?: number
}

export interface ILoading {
  detail?: boolean
  list?: boolean
  update?: boolean
  delete?: boolean
  create?: boolean
}
