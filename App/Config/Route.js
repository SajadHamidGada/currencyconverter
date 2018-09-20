import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
 import Home from '../screens/Home';
 import CurrenciesList from '../screens/CurrenciesList';
 import Option from '../screens/Option';
 import Themes from '../screens/Themes';

 const HomeStack = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            header:() => null
        }
    },
        Option:{
            screen: Option,
            navigationOptions :{headerTitle:'Options'}
         },
         Themes:{
            screen:Themes,
            navigationOptions : {headerTitle:'Themes'}
         }
 }, 
 {
     headerMode:'screen'
 }
);
const CurrenciesListStack = createStackNavigator({
    CurrenciesList: {
        screen:CurrenciesList,
        navigationOptions : ({navigation}) => ({headerTitle: navigation.state.params.title})
     },
})

 export default createStackNavigator({
     Home:{
        screen: HomeStack,
     },
     CurrenciesList: {
        screen:CurrenciesListStack,
     },

 },
 {
     mode:'modal',
     cardStyle: {paddingTop: StatusBar.currentHeight},
     headerMode: 'none'
    }
)