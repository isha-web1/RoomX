import { Chart } from 'react-google-charts'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../shared/LoadingSpinner'


const options = {
  title: 'Sales Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
const SalesLineChart = ({ data }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
      {loading ? (
        <LoadingSpinner smallHeight />
      ) : data.length > 1 ? (
        <Chart
          chartType='LineChart'
          width='100%'
          data={data}
          options={options}
        />
      ) : (
        <>
          <LoadingSpinner smallHeight />
          <p className='text-center'>
            Not enough data available for this section!
          </p>
        </>
      )}
    </>
  )
}


export default SalesLineChart