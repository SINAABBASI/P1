import {Navigation} from 'react-native-navigation'
import AuthScreen from './src/screens/Auth'
import  FindItem from "./src/screens/FindItem";
import  shareItem from "./src/screens/shareItem";

import { Provider } from 'react-redux';
import configStore from './src/store/configStore';

const store = configStore();

Navigation.registerComponentWithRedux('P1.AuthScreen',() => AuthScreen,Provider,store);
Navigation.registerComponentWithRedux('P1.FindItem',() => FindItem,Provider,store);
Navigation.registerComponentWithRedux('P1.shareItem',() => shareItem,Provider,store);

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'P1.AuthScreen',
          passProps: {
            text: 'stack with one child'
          }
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Login'
          }
        }
      }
    }
  }
});