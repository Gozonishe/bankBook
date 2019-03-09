import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './bankList.css';
import BankForm from '../bankForm/bankForm';


class BankList extends Component {

  
  // componentWillMount(){
  //   localStorage.getItem('submittedName') && this.setState({
  //     name: JSON.parse(localStorage.getItem('submittedName')),
  //     isLoading: false, 
  //   })
  // }

  // componentDidMount(){
  //   if (localStorage.getItem('submittedName')){
  //     this.fetchData();
  //   } else{
  //     console.log('Using data from localStorage')
  //   }
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState){
  //   localStorage.setItem('name', JSON.stringify(nextState.name))
  // }


  getList() {
    let bank_deserizlized = JSON.parse(localStorage.getItem('myBank'));

    return bank_deserizlized.map((bank, index) => <BankForm name={bank.name} 
                                                            bic={bank.bic} 
                                                            number={bank.number} 
                                                            address={bank.address}
                                                            key={bank.id} 
                                           
/>)
}

  render() {
    let bank_deserizlized = JSON.parse(localStorage.getItem('myBank'))
    return (
      <div> {
        bank_deserizlized === null ? <div><h1>Bank List is empty</h1></div> : 
        <div className='bankList'>
          {this.getList()}
        </div>
    
  }</div>)
}
}

export default BankList;
