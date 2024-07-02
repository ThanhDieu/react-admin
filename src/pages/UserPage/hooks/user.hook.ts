import { useEffect, useState } from 'react'
import { IUserType } from 'services'
import { useUserStore } from 'store'

export interface IControlForm {
  detail: IUserType | undefined
  open: boolean
  onChangeForm: (open: boolean, value?: IUserType) => void
}
const useUser = () => {
  const { users, getUsers, loading, deleteUser } = useUserStore()
  const [open, setOpen] = useState<boolean>(false)
  const [detail, setDetail] = useState<IUserType | undefined>()

  const handleChangeForm = (open: boolean, value?: IUserType) => {
    setOpen(open)
    setDetail(value)
  }

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return {
    list: users,
    loading,
    deleteUser,
    controlForm: {
      detail,
      open,
      onChangeForm: handleChangeForm
    }
  } as const
}

export { useUser }
