import React from 'react';
import { ScrollView, StatusBar, Platform,Linking } from 'react-native';
import ListItem from '../component/List/ListItem';
import Seperator from '../component/List/Seperator';
import {Ionicons} from '@expo/vector-icons';
// import connectAlert from '../component/Alert/connectAlert';

const ICON_PREFIX = Platform.OS  === 'ios' ? 'ios' : 'md';
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Option extends React.Component{
    handleThemes = () => {
           this.props.navigation.navigate('Themes')
    }
    handleFixer = () => {
        // Linking.openURL('httsssp://fixer.io').catch(() => this.props.alertWithType('error', 'Sorry!', 'Fixer.io not available'))
        Linking.openURL('httsssp://fixer.io').catch(() => alert("Error Occured"))
        
    }
    render(){
        return(
            <ScrollView>
                <StatusBar translucent = {false} barStyle = 'default'/>
                <ListItem 
                    text = "Themes"
                    onPress = {this.handleThemes}
                    customIcon = {<Ionicons name={ `${ICON_PREFIX}-arrow-forward`} color = {ICON_COLOR} size = {ICON_SIZE} />}
                />
                <Seperator />
                <ListItem 
                  text = "Fixer.io"    
                  onPress = {this.handleFixer}
                  customIcon = {<Ionicons name= {`${ICON_PREFIX}-link`} color = {ICON_COLOR} size = {ICON_SIZE} />}
                  />
                  <Seperator />
            </ScrollView>
        )
    }
}
export default Option
// export default connectAlert(Option)

