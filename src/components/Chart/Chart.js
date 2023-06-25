import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'
function Chart(props) {

    const dataPointValue=props.dataPoints.map((dataPoint)=>dataPoint.value);
    const totalMaxValue=Math.max(...dataPointValue)
  return (
    <div>
      <div className='chart'>
            {
                props.dataPoints.map((dataPoint)=>{
                    return <ChartBar
                        key={dataPoint.label}
                        maxValue={totalMaxValue}
                        value={dataPoint.value}
                        label={dataPoint.label}
                    />
                })
            }
      </div>
    </div>
  )
}

export default Chart
