import React, {Component} from 'react';
import { Icon, Divider, Table, Header } from 'semantic-ui-react';
import './bankForm.css';

class BankForm extends Component {

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

                    <Table definition>
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
                </React.Fragment>
  </div>
    )}
}

export default BankForm;