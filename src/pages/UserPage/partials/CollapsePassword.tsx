import { Button, Flex } from 'antd'
import { Password } from 'components'
import { EFuncType } from 'configs'
import React, { useState } from 'react'

interface ICollapsePasswordProps {
  isShow?: boolean
}
const CollapsePassword: React.FC<ICollapsePasswordProps> = () => {
  const [open, setOpen] = useState<boolean>(false)

  const onChange = (value: boolean) => {
    setOpen(value)
  }
  return (
    <>
      <Flex justify='end' className='mb-3'>
        <Button type='link' onClick={() => onChange(!open)}>
          Reset password
        </Button>
      </Flex>
      <Password type={EFuncType.UPDATE} isShow={open} />
    </>
  )
}

export default CollapsePassword
