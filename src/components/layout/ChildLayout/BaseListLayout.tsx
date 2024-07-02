/* eslint-disable @typescript-eslint/no-unused-vars */

import { PlusOutlined } from '@ant-design/icons'
import { Button, DrawerProps, Flex, Table } from 'antd'
import { TableProps } from 'antd/es/table'
import { BaseOuterLayout, SearchInput } from 'components'
import { useDrawer, useFilter } from 'hooks'
import { useState } from 'react'
import { IBaseData } from 'types'
import { searchAllField } from 'utils'

interface IBaseListLayoutProps<T> {
  children?: React.ReactNode
  headerPage?: React.HTMLAttributes<HTMLElement>
  tablePage: TableProps<T>
  drawerPage?: DrawerProps & {
    onOpen?: (value: boolean) => void
  }
}

const BaseListLayout = <T extends IBaseData>({
  tablePage,
  headerPage,
  children,
  drawerPage
}: IBaseListLayoutProps<T>) => {
  const [search, setSearch] = useState<string>('')
  const { dataSource, columns, loading } = tablePage
  const drawer = useDrawer(drawerPage || {})

  const handleSearch = (records: T[], value: string) => {
    return searchAllField(value, records)
  }

  const [results] = useFilter(dataSource as T[], [[handleSearch, [search]]], [search, dataSource])

  return (
    <BaseOuterLayout headerPage={headerPage}>
      <>
        <Flex justify='space-between'>
          <SearchInput onChange={(value) => setSearch(value)} allowClear />
          <Button icon={<PlusOutlined />} type='primary' onClick={() => drawerPage?.onOpen?.(true)}>
            New
          </Button>
        </Flex>
        {children || (
          <Table className='mt-3' dataSource={results || []} columns={columns} rowKey='id' loading={loading} />
        )}
      </>
    </BaseOuterLayout>
  )
}
export default BaseListLayout
