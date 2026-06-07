import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {persistor,store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
console.log('store =', store);
console.log('persistor =', persistor);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
  )
}

export default App