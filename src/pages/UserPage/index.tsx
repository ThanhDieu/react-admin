import { ColumnsType } from 'antd/es/table'
import { ActionTable, BaseListLayout } from 'components'
import withHelmet from 'components/layout/WithHelmet'
import { IUserType } from 'services'
import { UserForm } from './partials'
import { useUser } from './hooks'

const UserPage = () => {
  const { list: users, loading, deleteUser, controlForm } = useUser()

  const columns: ColumnsType<IUserType> = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (_, _r, index) => Number(index + 1),
      width: '5%'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: '',
      render: (_, record) => {
        return (
          <ActionTable
            record={record}
            onDeleteRecord={record.username !== 'admin' ? deleteUser : undefined}
            onEdit={(value) => {
              controlForm?.onChangeForm(true, value)
            }}
          />
        )
      }
    }
  ]

  return (
    <BaseListLayout<IUserType>
      tablePage={{
        dataSource: users || [],
        columns,
        loading: loading.list
      }}
      drawerPage={{
        title: controlForm?.detail ? `Edit ${controlForm.detail.username}` : 'New User',
        children: <UserForm controlForm={controlForm} />,
        size: 'large',
        open: controlForm?.open,
        onClose() {
          controlForm?.onChangeForm(false, undefined)
        },
        onOpen(value) {
          controlForm?.onChangeForm(value, undefined)
        }
      }}
    />
  )
}
const Home = withHelmet({ title: 'Yats - User' }, UserPage)

export default Home
