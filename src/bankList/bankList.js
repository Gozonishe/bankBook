import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import BanksData from '../data/banks';


class BankList extends Component {
  render() {
    return ( 
        <div>
            <h1>Hello Worlds!</h1>
            {BanksData.map((postDetail, index) => {
                return <h1>{postDetail.name}</h1>
            })}
        </div>
    );
  }
}

export default BankList;
