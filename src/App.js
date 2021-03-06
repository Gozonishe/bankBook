import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import MainPage from './components/mainPage/mainPage';
import NewBankForm from './components/newBankForm/newBankForm';

class App extends Component {
  render() {
    return ( 
    <Router>
      <div className="App" >
        <span className='appContent'>
            <Route exact path='/' component={MainPage} />
            <Route path='/new_bank_form' component={NewBankForm} />
        </span>    
      </div>
    </Router>
    );
  }
}

export default App;
