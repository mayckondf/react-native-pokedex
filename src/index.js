import React from 'react';

import '~/configs/ReactotronConfig';

import { Provider } from 'react-redux';
import { Platform, StatusBar } from 'react-native';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    {Platform.OS === 'android' && <StatusBar backgroundColor="#D60A2D" />}
    <Routes />
  </Provider>
);

export default App;
