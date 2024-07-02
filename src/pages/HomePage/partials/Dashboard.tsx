import { Card, Col, Row, Statistic } from 'antd'
import { useUserStore } from 'store'
import EventLogs from './EventLogs'
import { useEffect } from 'react'
import GradientAreaChart from './GradientAreaChart'
import BasicDonutPlot from './BasicDonutPlot'

const Dashboard = () => {
  const { count, getUsers } = useUserStore()

  const overviewTemp = [
    {
      title: 'Users',
      count: count
    },
    {
      title: 'Products',
      count: 11
    },
    {
      title: 'Stores',
      count: 8
    }
  ]

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Row gutter={16}>
        <Col span={16}>
          <Row gutter={16}>
            {overviewTemp.map((item) => (
              <Col key={item.title} span={8}>
                <Card title={item.title}>
                  <Statistic value={item.count} />
                </Card>
              </Col>
            ))}
            <Col span={24} className='mb-3'>
              <GradientAreaChart />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={16}>
            <Col span={24}>
              <EventLogs />
            </Col>
            <Col span={24}>
              <BasicDonutPlot />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
