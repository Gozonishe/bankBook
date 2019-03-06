import React, {Component} from 'react';
import {Button, Image, Modal} from 'semantic-ui-react';
import './mainPage.css';
import NewBankForm from '../newBankForm/newBankForm';
import BankList from '../bankList/bankList';

class MainPage extends Component{
    render(){
        return(
            
            <div className='mainPage'>
                <Modal trigger={<Button>New Bank</Button>} closeIcon>
                    <Modal.Header>Bank Description</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='../bank.png' />
                        <Modal.Description>
                            <NewBankForm/>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                
                <BankList/>
            </div>
        ) 
    }
}

export default MainPage; 