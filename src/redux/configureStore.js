import {createStore} from 'redux';
import {selectReducer} from './reducers';

export  const ConfigureStore = ()=> {
     console.log('selectReducer: ', selectReducer);
     const store = createStore(selectReducer);
     return store;
}