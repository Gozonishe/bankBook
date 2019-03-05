import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './newBankForm.css';

export default class NewBankForm extends Component {
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
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
