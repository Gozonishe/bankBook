import React, {Component} from 'react';
import { Icon, Divider, Table, Header } from 'semantic-ui-react';
import { delLocalStorageData } from '../../helpers/localStorageUtils/delData';
import './bankForm.css';
import { getLocalStorageData } from '../../helpers/localStorageUtils/getData';
import NewBankForm from '../newBankForm/newBankForm';
import {Button, Image, Modal} from 'semantic-ui-react';

class BankForm extends Component {

    removeItemHandler = (event, itemName) => {
        delLocalStorageData(itemName, 'myBank')
        this.props.onBankRemoveCallback(itemName)
    }  

    render() {
        const {name, bic, _id, number, address} = this.props;    
        return (              
            <div id='bankCard'>  
                <React.Fragment>
                    <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='home' />
                        Client № {_id}
                    </Header>
                    </Divider>
                    <Table definition id ='qwe'>
                    <Table.Body>
                        <Table.Row>
                        <Table.Cell width={3}>Bank Name</Table.Cell>
                        <Table.Cell>{name}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Bank BIC</Table.Cell>
                        <Table.Cell>{bic}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Bank Number</Table.Cell>
                        <Table.Cell>{number}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Bank Address</Table.Cell>
                        <Table.Cell>{address}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                    
                    </Table>
                    <div id='funcButtons'>
                        <Modal trigger={<Button id='editButton'>Edit Client</Button>} closeIcon>
                            <Modal.Header>Bank Description</Modal.Header>
                                <Modal.Content image>
                                    <Image wrapped size='medium' src='../bank.png' />
                                    <Modal.Description>
                                        <NewBankForm onBankChangeCallback={this.onBankChangeCallback}/>
                                    </Modal.Description>
                                </Modal.Content>
                        </Modal>
                        <button id='delButton' onClick={event => this.removeItemHandler(event, name)}>Delete Client</button>
                    </div>
                </React.Fragment>
                
            </div>
    )}
}

export default BankForm;