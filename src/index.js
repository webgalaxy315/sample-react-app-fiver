import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Router from './router';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import { maindata } from './store/constants/main';

let DefaultData = {
  maindata: maindata,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(DefaultData)}>
      <Router />
    </Provider>
  </React.StrictMode >
  ,
  document.getElementById('root')
);

reportWebVitals();
