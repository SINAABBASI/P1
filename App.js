import {Navigation} from 'react-native-navigation'
import AuthScreen from './src/screens/Auth'
import  FindItem from "./src/screens/FindItem";
import  shareItem from "./src/screens/shareItem";

import { Provider } from 'react-redux';
import configStore from './src/store/configStore';
import ItemDetails from './src/screens/ItemDetails';
import X from './src/screens/X'
import Y from './src/screens/Y'
const store = configStore();
Navigation.registerComponentWithRedux('P1.AuthScreen',() => AuthScreen,Provider,store);
Navigation.registerComponentWithRedux('P1.FindItem',() => FindItem,Provider,store);
Navigation.registerComponentWithRedux('P1.shareItem',() => shareItem,Provider,store);
Navigation.registerComponentWithRedux('P1.itemDetails',() => ItemDetails,Provider,store);
Navigation.registerComponent('P1.X', () => X);
Navigation.registerComponent('P1.Y', () => Y);
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