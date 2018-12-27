import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

import { Provider } from 'react-redux';
import configStore from './src/store/configStore';

const store = configStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('P1', () => RNRedux);
