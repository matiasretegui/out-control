import React, { Component } from 'react'
import {connect} from 'react-redux';


import Modal from '../Modal/Modal'
import './CashFlow.css'


const CashFlowForm = ({children, handleSubmit}) => (
  <form name="CashFlowForm" onSubmit={handleSubmit}>
    <label htmlFor="username">Enter username</label>
    <input id="username" name="username" type="text" />

    <label htmlFor="email">Enter your email</label>
    <input id="email" name="email" type="email" />

    <label htmlFor="birthdate">Enter your birth date</label>
    <input id="birthdate" name="birthdate" type="text" />

    <input type="submit" value="Submit" />
  </form>
)


class CashFlow extends Component {

  state = {
    isOpen:  this.props.isOpen || false
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.target);
  //TODO complete data
  //   this.props.dispatch({
  //     type:'ADD_FLOW',
  //     data});

  }

  render() {
    return (
      <div className="CashFlow">
        <button onClick={this.toggleModal}>
          Add Flow
        </button>
        {this.state.isOpen &&
        <Modal show={this.state.isOpen} close={this.toggleModal} title='Hola Mudo!'>
          <CashFlowForm handleSubmit={this.handleSubmit}>
          <div className="actions">
            <button>Save</button>
            <a className='btn' onClick={this.toggleModal}>Close</a>
          </div>
          <div>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
          </CashFlowForm>
        </Modal>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flows: state
  }
}

export default connect(mapStateToProps)(CashFlow)