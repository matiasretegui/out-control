import React, {Component} from 'react'
import {connect} from 'react-redux';
import CashFlow from '../../CashFlow/CashFlow'
import MonthlyInChart from '../../Charts/MonthlyInChart'

class BalanceSheet extends Component {
  render () {
    console.log(this.props.flows)
    return  <div className="BalanceSheet">
      <div>
        <h2>Ingresos Mensuales por $5000</h2>
        <MonthlyInChart />
        <a href='ingresos'>Ver Ingresos</a>
      </div>
      <div>
        <h2>Gastos Mensuales por $4300</h2>
        <a href='gastos'>Ver Gastos</a>
      </div>
      <div>
        ACA VA UN GRAFICO
      </div>
      <div>
        <CashFlow isOpen={false} />
      </div>
    </div>
  }
}
const mapStateToProps = (state) => {
  return {
    flows: state
  }
}

export default connect(mapStateToProps)(BalanceSheet);
