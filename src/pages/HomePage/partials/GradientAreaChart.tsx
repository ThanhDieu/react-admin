/* eslint-disable @typescript-eslint/no-explicit-any */
import { Area } from '@ant-design/plots'

const GradientAreaChart = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG }
  // } = theme.useToken()

  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/stocks.json',
      transform: [{ type: 'filter', callback: (d: any) => d.symbol === 'GOOG' }]
    },
    xField: (d: any) => new Date(d.date),
    yField: 'price',
    style: {
      fill: `linear-gradient(-90deg, white 0%, darkblue 100%)`
    },
    axis: {
      y: { labelFormatter: '~s' }
    },
    line: {
      style: {
        strokeWidth: 2
      }
    }
  }
  return <Area {...config} />
}

export default GradientAreaChart
