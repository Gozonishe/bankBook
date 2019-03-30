import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import './changeBankForm.css';
import { updateLocalStorageDataByName } from '../../helpers/localStorageUtils/updateData';

export default class ChangeBankForm extends Component {
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

    const bank = {
      name,
      bic,
      number,
      address,
    }

    updateLocalStorageDataByName(this.props.updatedBankName, bank, 'myBank')
  
    //popup confirm
    swal({
      title: "Bank Info Edited!",
      icon: "success",
      button: "Ok!",
    })
    .then (isConfirm => {
      if (isConfirm) {
        this.props.onBankChangeCallback(true, bank)
      }
    })
  }

  render() {
    const { name, bic, number, address } = this.state
    return (
      <div  className='changeForm'>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group id='formItems'>
            <Form.Input 
              placeholder='Name' 
              name='name' 
              value={name}
              required 
              onChange={this.handleChange} id='formItem'/> 
            <Form.Input 
              placeholder='BIC' 
              name='bic' 
              value={bic}
              required
              title='AAAA-AA-AA-AAA'
              type='text'
              maxLength='14' 
              pattern='([A-Z]{4})[-]{1}([A-Z]{2})[-]{1}([0-9A-Z]{2})[-]{1}([0-9A-Z]{3})' 
              onChange={this.handleChange} id='formItem'/>
            <Form.Input 
              placeholder='Account number' 
              name='number' 
              value={number}
              required
              type='text'
              maxLength='12' 
              onChange={this.handleChange} id='formItem'/>
            <Form.Input
              placeholder='Address'
              name='address'
              value={address}
              required
              onChange={this.handleChange} id='formItem'/>
            <Form.Button color='blue' content='Submit Changes' id='submitButton'/>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
