import React from 'react';
import {render} from 'react-dom';
import Routes from './routes'
// import {Provider} from 'react-redux';
// import store from './Store/store'

render(
//   <Provider store={store}>
    <div>
      <Routes/>
    </div>,
//   </Provider>,
  document.getElementById('app')
);