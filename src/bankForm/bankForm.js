import React, {Component} from 'react';
import { Icon, Divider, Table, Header } from 'semantic-ui-react';
import './bankForm.css';

class BankForm extends Component {
    constructor(props){
        super(props);
    }

    // handleAddToCart = () => {
    //     console.log('');
    //     const {name, price, _id, image, info, addToCart} = this.props;
    //     const itemInfo = {
    //         name,
    //         price,
    //         _id,
    //         image,
    //         info,
    //     };
    //     swal({
    //         title: "Item Added!",
    //         icon: "success",
    //         button: "Ok!",
    //       });
    //     addToCart(itemInfo);
    // }

    render() {
        const {name, bic, id, number, address} = this.props;    
        return (              
            <div id='bankCard'>  
                <React.Fragment id='bankForm'>
                    <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='home' />
                        Client № {id}
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