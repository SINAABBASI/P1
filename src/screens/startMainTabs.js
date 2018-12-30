import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';    
const startTabs = () => {
    Promise.all([
      Icon.getImageSource("md-map",30),
      Icon.getImageSource("md-share-alt",30) ,
      Icon.getImageSource("ios-menu",30) , 
    ]).then(source => {
        Navigation.setRoot({
            root: {  
                sideMenu : {
                    left : {
                        component :{
                            name : "P1.X",
                        }
                    },
                    center : {  
                        bottomTabs: { 
                            children: [
                            {
                                stack: {
                                    children: [{
                                        component: {
                                            name: 'P1.shareItem',
                                            passProps: {
                                                text: 'This is tab 1'
                                            },options:{
                                                topBar :{
                                                    leftButtons : [
                                                        {
                                                            id : "MenuBut",
                                                            icon : source[2]
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }],
                                    
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'ShareItem'
                                            }
                                        },
                                        bottomTab: {
                                            text: 'Tab 1',
                                            icon: source[0],
                                            testID: 'FIRST_TAB_BAR_BUTTON'
                                        },
                                        
                                    }
                                }
                            },
                            {
                                stack: {
                                    children: [{
                                        component: {
                                            name: 'P1.FindItem',
                                            passProps: {
                                                text: 'This is tab 1'
                                        },options:{
                                            topBar : {
                                                leftButtons : [
                                                    {
                                                        id : "MenuBut",
                                                        icon : source[2]
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                    }],
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'FindItem'
                                            }
                                        },
                                        bottomTab: {
                                            text: 'Tab 1',
                                            icon: source[1],
                                            testID: 'FIRST_TAB_BAR_BUTTON'
                                        }
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        });
    })
}

export default startTabs;