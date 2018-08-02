import React from 'react'
import { PieChart, d3 } from 'react-d3-components'

const PieChartReport = ({ title, width, height, data }) => (
  <div className='PieChartReport'>
    <h2>{title}</h2>
    <br />
    <PieChart
      id={title}
      width={width}
      height={height}
      margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
      data={{ values: [{x: "Label1", y: 20}, {x: "Label2", y: 80}] }}
      tooltipHtml={(x, y) => `${x}: ${y}`}
      colorScale={d3.scale.category20()}
    />
  </div>)

export default PieChartReport