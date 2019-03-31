import React, {Component} from 'react';
import {Button, Image, Modal} from 'semantic-ui-react';
import './mainPage.css';
import NewBankForm from '../newBankForm/newBankForm';
import BankFilter from '../bankFilter/bankFilter';
import swal from 'sweetalert';
import { getLocalStorageData } from '../../helpers/localStorageUtils/getData';
import BankForm from '../bankForm/bankForm';

class MainPage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            isBankAdded: false,
            removedBank: '',
            changedBank: '',
        }
    }

    filterUpdate = (value) => {
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
            this.onBankChangeCallback('Bank Base Cleared!')
          })
    }

    getBankList() {
        return getLocalStorageData('myBank')
        .filter(bank => 
            bank.name.toLowerCase().indexOf(this.state.filterText) !== -1 || bank.bic.indexOf(this.state.filterText) !== -1)
        .map((bank, idx) => (
          <BankForm key={bank.name}
            name={bank.name} 
            bic={bank.bic} 
            number={bank.number} 
            address={bank.address}
            _id={idx + 1}           
            onBankRemoveCallback={this.onBankRemoveCallback}                            
            onBankChangeCallback={this.onBankChangeCallback}                            
          />
        ))
      }

    onBankAddCallback = isBankAdded => {
        this.setState({isBankAdded})
    }

    onBankRemoveCallback = bankName => {
        this.setState({removedBank: bankName})
    }
    onBankChangeCallback = bankName => {
        this.setState({changedBank: bankName})
    }

    render(){
        return(        
            <div className='mainPage'>
                <header>
                    <Modal trigger={<Button id='newBankButton'>New Bank</Button>} closeIcon>
                        <Modal.Header>Bank Description</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='medium' src='../bank.png' />
                            <Modal.Description>
                                <NewBankForm onBankAddCallback={this.onBankAddCallback}/>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                    <br/>    
                    <BankFilter filterText={this.state.filterText}
                                filterUpdate={this.filterUpdate}/>
                    <Button id='clearStorageButton' onClick={this.clearLocalStorage}>Clear Bank Base</Button>
                </header>  
                <main>
                    <div> 
                        {
                        getLocalStorageData('myBank') === null ? <div><h1>Bank List is empty...</h1></div> :
                        <div className='bankList'>
                            {this.getBankList()}
                        </div>
                        }
                    </div>
                </main>
            </div>
        ) 
    }
}

export default MainPage; 