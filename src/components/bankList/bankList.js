// import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css';
// import './bankList.css';
// import BankForm from '../bankForm/bankForm';
// import { getLocalStorageData } from '../../helpers/localStorageUtils/getData';


// class BankList extends Component {

//   getList() {
//     return getLocalStorageData('myBank').map((bank, idx) => (
//       <BankForm key={bank.name}
//         name={bank.name} 
//         bic={bank.bic} 
//         number={bank.number} 
//         address={bank.address}
//         _id={idx + 1}                                       
//       />
//     ))
//   }

//   render() {
    
//     return (
//       <div> 
//         {
//           getLocalStorageData('myBank') === null ? <div><h1>Bank List is empty</h1></div> :
//           <div className='bankList'>
//             {this.getList()}
//           </div>
//         }
//       </div>)
//   }
// }

// export default BankList;









 

//   render() {
//     const {filterText} = this.props;
//     let bank_deserizlized = JSON.parse(localStorage.getItem('myBank'));
    
//     const getList = bank_deserizlized
//       .filter(bank => {
//         //remove names
//         return bank.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 
//       })
//       .map(bank => {
//         return (
//           <BankForm key={bank._id}
//                     name={bank.name} 
//                     bic={bank.bic} 
//                     number={bank.number} 
//                     address={bank.address}
//                     _id={bank._id}/>
//         )
//     })
//     return (
//       <div> {
//         bank_deserizlized === null ? <div><h1>Bank List is empty</h1></div> : 
//         <div className='bankList'>
//           {getList}
//         </div>
    
//   }</div>)
// }
// }

// export default BankList;


