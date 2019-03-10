import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import './newBankForm.css';

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
    storageArray: [],
    _id: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, bic, number, address, _id, storageArray } = this.state
    // this.setState({
    //   submittedName: name,
    //   submittedBic: bic,
    //   submittedNumber: number,
    //   submittedAddress: address,
    //   storageArray: storageArray,
    //   _id: _id,
    // })

    let bank = {
      name,
      bic,
      number,
      address,
      _id: newStorage === undefined? 1 : newStorage.length + 1,
    }

    console.log(newStorage)

    const storageData = JSON.parse(localStorage.getItem('myBank'))
    const newStorage = storageData === null ? [] : storageData.slice() 
    newStorage.push(bank)
    localStorage.setItem('myBank', JSON.stringify(newStorage))

    //storageArray.push(bank)
    // const res = [...storageData, bank]
    // console.log(res);
    
    //let bank_serialized = JSON.stringify(storageArray)
    //localStorage.setItem('myBank', bank_serialized)

    //popup confirm
    swal({
      title: "Bank Added!",
      icon: "success",
      button: "Ok!",
    }).then (isConfirm => {
      window.location.reload()
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
            <Form.Button color='blue' content='Submit' id='submitButton'/>
          </Form.Group>
        </Form>
      </div>
      
    )
  }
}
