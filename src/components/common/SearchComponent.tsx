import { Form, Input } from 'antd'
import { useEffect } from 'react'

interface Props {
  placeholder?: string
  onChange?: (value: string) => void
  style?: React.CSSProperties
  allowClear?: boolean
  defaultValue?: string
}

const { Search } = Input
const SearchComponent: React.FC<Props> = ({ placeholder, onChange, style, allowClear = false, defaultValue }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      search: defaultValue
    })
  }, [form, defaultValue])

  return (
    <Form form={form} className='position-relative'>
      <Form.Item name='search' className='mb-0'>
        <Search
          placeholder={placeholder || 'Search...'}
          onSearch={onChange}
          style={style}
          allowClear={allowClear}
          autoComplete='off'
          title='Search'
          enterButton
          className='w-[450px]'
        />
      </Form.Item>
    </Form>
  )
}
export default SearchComponent
