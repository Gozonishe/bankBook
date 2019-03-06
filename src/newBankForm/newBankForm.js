import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './newBankForm.css';
import { fs } from 'fs';

export default class NewBankForm extends Component {
  state = { name: '', bic: '', number: '', address: '', submittedName: '', submittedBic: '', submittedNumber: '', submittedAddress: ''}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, bic, number, address } = this.state

    this.setState({ submittedName: name, submittedBic: bic, submittedNumber: number, submittedAddress: address })

  }

  componentWillMount(){
    localStorage.getItem('submittedName') && this.setState({
      name: JSON.parse(localStorage.getItem('submittedName')),
      isLoading: false, 
    })
  }

  componentDidMount(){
    if (localStorage.getItem('submittedName')){
      this.fetchData();
    } else{
      console.log('Using data from localStorage')
    }
  }

  UNSAFE_componentWillUpdate(nextProps, nextState){
    localStorage.setItem('name', JSON.stringify(nextState.name))
  }
  render() {
    const { name, bic, number, address, submittedName, submittedBic, submittedNumber, submittedAddress } = this.state

    return (
      <div className='newForm'>
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
            <Form.Button color='green' content='Submit' id='submitButton'/>
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, bic, number, address }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedBic, submittedNumber, submittedAddress }, null, 2)}</pre>
      </div>
      
    )
    
      
    
  
  }
}
