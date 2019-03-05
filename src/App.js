import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import MainPage from './mainPage/mainPage';
import NewBankForm from './newBankForm/newBankForm';

class App extends Component {
  render() {
    return ( 
    <Router>
      <div className="App">
            <Route exact path='/' component={MainPage} />
            <Route path='/new_bank_form' component={NewBankForm} />
      </div>
    </Router>
    );
  }
}

export default App;
