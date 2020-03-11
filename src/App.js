import React from 'react';
import store from 'store'
import { Provider } from 'react-redux'
import './App.less';
import DefaultLayout from 'layouts/Default'

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout/>
    </Provider>
  );
}

export default App;
