import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';


import moment from 'moment'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import flowReducer from './reducers/flowReducer';

const TYPE_IN  = 'IN'
const TYPE_OUT = 'OUT'

const mockedFlows = [
  {date: moment().subtract(6, 'day').format('DD/MM/YYYY'), type: TYPE_IN, amount: 2100, category: 7},
  {date: moment().subtract(1, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 100, category: 1},
  {date: moment().subtract(1, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 55, category: 6},
  {date: moment().subtract(1, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 30, category: 6},
  {date: moment().subtract(2, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 600, category: 5},
  {date: moment().subtract(2, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 60, category: 6},
  {date: moment().subtract(3, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 90, category: 6},
  {date: moment().subtract(3, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 31, category: 4},
  {date: moment().subtract(3, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 65, category: 3},
  {date: moment().subtract(3, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 22, category: 6},
  {date: moment().subtract(4, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 126, category: 6},
  {date: moment().subtract(4, 'day').format('DD/MM/YYYY'), type: TYPE_OUT, amount: 365, category: 2},
]


const mockCategories = [
  {id:1, name:'Electricidad'},
  {id:2, name:'Prepaga'},
  {id:3, name:'Tarjeta Banco X'},
  {id:4, name:'Tarjeta Banco Y'},
  {id:5, name:'Prestamo'},
  {id:6, name:'Super'},
  {id:7, name:'Sueldo'}
]
const mockStore = {flows: mockedFlows}

const store = createStore(flowReducer, mockStore);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

registerServiceWorker();
