import { Card, List } from 'antd'
import { DATE_TIME_FORMAT_1, SECONDS } from 'configs'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useAuthStore, useLoggingStore } from 'store'
interface IEventLogsProps {}
const EventLogs: React.FC<IEventLogsProps> = () => {
  const { getLogs, logs } = useLoggingStore()
  const { detail: profile } = useAuthStore()

  useEffect(() => {
    getLogs()
  }, [])

  return (
    <Card title='Logging Events'>
      <List
        className='overflow-auto h-[250px] pr-3'
        itemLayout='horizontal'
        dataSource={logs || []}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta title={`${profile?.name} ${item.event} ${item.message}`} />
            <div>{dayjs(Number(item.createdAt) * SECONDS).format(DATE_TIME_FORMAT_1)}</div>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default EventLogs
