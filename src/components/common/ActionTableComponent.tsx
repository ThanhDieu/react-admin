import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Flex, Popconfirm, message } from 'antd'
import { IUserType } from 'services'

interface IActionProps {
  record: IUserType
  onDeleteRecord?: (id: string) => Promise<IUserType>
  onEdit: (value: IUserType) => void
}
const ActionTableComponent: React.FC<IActionProps> = ({ record, onDeleteRecord, onEdit }) => {
  return (
    <Flex>
      <Button
        type='text'
        icon={<EditOutlined />}
        onClick={() => {
          onEdit(record)
        }}
      />
      <Popconfirm
        title='Sure to delete?'
        onConfirm={() => {
          if (record?.id) onDeleteRecord?.(record.id)
          else message.error('Have something wrong', 2)
        }}
      >
        <Button type='text' icon={<DeleteOutlined />} danger disabled={!onDeleteRecord} />
      </Popconfirm>
    </Flex>
  )
}

export default ActionTableComponent
