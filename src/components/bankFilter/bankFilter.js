import React, { Component } from 'react';
import './bankFilter.css';

class BankFilter extends Component {

    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <div id='bankFilter'>
                <input 
                    type='text'
                    ref={ (value) => this.myValue = value}
                    placeholder='Filter by Bank Name/BIC'
                    onChange={this.filterUpdate.bind(this)}
                    />
            </div>
        )
    }
}

export default BankFilter;