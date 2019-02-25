import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import {ConfigureStore} from '../redux/configureStore';

const store = ConfigureStore();
console.log('store: ', store);

class Main extends Component {
  
    render() {
      return (
        // To make the store available to all the component
        <Provider store={ store }>      
            <App />    
        </Provider>
      );
    }
  }
  
  export default Main;
  