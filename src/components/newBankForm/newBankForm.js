import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import './newBankForm.css';
import { setLocalStorageData } from '../../helpers/localStorageUtils/setData';

export default class NewBankForm extends Component {
  state = {
    name: '',
    bic: '',
    number: '',
    address: '',
    submittedName: '',
    submittedBic: '',
    submittedNumber: '',
    submittedAddress: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, bic, number, address } = this.state

    let bank = {
      name,
      bic,
      number,
      address,
    }

    setLocalStorageData(bank, 'myBank')
    //popup confirm
    swal({
      title: "Bank Added!",
      icon: "success",
      button: "Ok!",
    })
    .then (isConfirm => {
      if (isConfirm) {
        this.props.onBankAddCallback(true)
      }
    })
  }

  

  render() {
    const { name, bic, number, address } = this.state
    
    return (
      <div  className='newForm'>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group id='formItems'>
            <Form.Input 
              placeholder='Name' 
              name='name' 
              value={name} 
              onChange={this.handleChange} 
              required id='formItem'/> 
            <Form.Input 
              placeholder='BIC' 
              name='bic'
              value={bic} 
              onChange={this.handleChange} 
              required
              title='AAAA-AA-AA-AAA'
              pattern='([A-Z]{4})[-]{1}([A-Z]{2})[-]{1}([0-9A-Z]{2})[-]{1}([0-9A-Z]{3})' id='bicForm'/>
            <Form.Input 
              placeholder='Account number' 
              name='number' 
              type='number'
              value={number} 
              onChange={this.handleChange} 
              required id='formItem'/>
            <Form.Input
              placeholder='Address'
              name='address'
              value={address}
              onChange={this.handleChange} 
              required id='formItem'/>
            <Form.Button color='blue' content='Submit' id='submitButton'/>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
