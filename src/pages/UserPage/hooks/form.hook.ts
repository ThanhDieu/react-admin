/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormInstance } from 'antd'
import { EFuncType } from 'configs'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { IUserType } from 'services'
import { useAlertStore, useLoggingStore, useUserStore } from 'store'
import { IControlForm } from './user.hook'

const useUserForm = (form: FormInstance<any>, controlForm?: IControlForm) => {
  const { updateUser, createUser, loading } = useUserStore()
  const addEvent = useLoggingStore((state) => state.createLog)
  const { setAlert } = useAlertStore()
  const { detail, onChangeForm } = controlForm ?? {}

  const onFinish = async (data: IUserType) => {
    let res
    if (detail) {
      data.id = detail.id
      data.updatedAt = dayjs().unix()
      res = await updateUser(data)
      addEvent({
        message: data.username,
        event: EFuncType.UPDATE,
        createdAt: dayjs().unix()
      })
    } else {
      data.password = '123@Test'
      data.createdAt = dayjs().unix()
      res = await createUser(data)
      addEvent({
        message: `new ${data.username}`,
        event: EFuncType.CREATE,
        createdAt: dayjs().unix()
      })
    }
    if (res) {
      setAlert({ message: 'Successfully!!!', status: 'success' })
      onChangeForm?.(false)
      onReset()
    }
  }

  const onReset = () => {
    form.resetFields()
  }

  useEffect(() => {
    onReset()
    if (detail) form.setFieldsValue(detail)
  }, [detail, onReset, form])

  return {
    onFinish,
    onReset,
    loading
  } as const
}
export { useUserForm }
