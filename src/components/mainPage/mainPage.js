import React, {Component} from 'react';
import {Button, Image, Modal} from 'semantic-ui-react';
import './mainPage.css';
import NewBankForm from '../newBankForm/newBankForm';
import BankList from '../bankList/bankList';
import BankFilter from '../bankFilter/bankFilter';
import swal from 'sweetalert';

class MainPage extends Component{

    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            bank_deserizlized : JSON.parse(localStorage.getItem('myBank')),
        }
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    clearLocalStorage = () => {
        localStorage.clear()
        swal({
            title: "Bank Base Cleared!",
            icon: "warning",
            button: "Ok!",
          }).then (isConfirm => {
            window.location.reload()
          })
    }

    render(){

        console.log(this.state.filterText)

        return(        
            <div className='mainPage'>  
                <Modal trigger={<Button id='newBankButton'>New Bank</Button>} closeIcon>
                    <Modal.Header>Bank Description</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='../bank.png' />
                        <Modal.Description>
                            <NewBankForm/>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <br/>
                <br/>
                <BankFilter filterText={this.state.filterText}
                            filterUpdate={this.filterUpdate.bind(this)}/>
                <Button id='clearStorageButton' onClick={this.clearLocalStorage}>Clear Bank Base</Button>
                <main>
                    <BankList bank_deserizlized={this.props.bank_deserizlized}/>
                </main>
            </div>
        ) 
    }
}

export default MainPage; 