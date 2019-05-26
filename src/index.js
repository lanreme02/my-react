import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import locationsData from './data';
import * as serviceWorker from './serviceWorker';
import storeFactory from './store/index';

    const store = storeFactory(locationsData);

      const loadpage = () => {
        ReactDOM.render(<App store={store} />, document.getElementById('root'));
      }

      store.subscribe(() => {
        console.log("in subscribe method");
         sessionStorage['redux-store'] = JSON.stringify(store.getState())
         console.log(store.getState())
         loadpage();
      })

      loadpage();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
