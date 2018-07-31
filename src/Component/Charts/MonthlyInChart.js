import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2';

const buidFlows = (flows) => {
  return {
    width:400,
    datasets: [{
      data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  }

  //TODO filter and format data
  // flows.filter((f) => f.type === 'TYPE_IN')
}

const MonthlyInChart = () => (
  <div>
    <Doughnut data={buidFlows([])} width={'300px'} />
  </div>
)

export default MonthlyInChart