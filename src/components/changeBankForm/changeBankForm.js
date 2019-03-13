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
              onChange={this.handleChange} id='formItem'/> 
            <Form.Input 
              placeholder='BIC' 
              name='bic' 
              value={bic} 
              onChange={this.handleChange} id='formItem'/>
            <Form.Input 
              placeholder='Account number' 
              name='number' 
              value={number} 
              onChange={this.handleChange} id='formItem'/>
            <Form.Input
              placeholder='Address'
              name='address'
              value={address}
              onChange={this.handleChange} id='formItem'/>
            <Form.Button color='blue' content='Submit Changes' id='submitButton'/>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
