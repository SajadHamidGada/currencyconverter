import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../component/List/ListItem';
import Seperator from '../component/List/Seperator';
import EStyleSheet from 'react-native-extended-stylesheet';

import {changeTheme} from '../Action/Themes';

const styles = EStyleSheet.create({
    $blue : "$primaryBlue",
    $orange : "$primaryOrange",
    $green:'$primaryGreen',
    $purple:'$primaryPurple'
});


class Themes extends React.Component{
    handleThemes = (color) => {
        this.props.dispatch(changeTheme(color))
        this.props.navigation.goBack()
    }
    render(){
        return(
            <ScrollView>
                <StatusBar translucent={false} barStyle = "default"/>
                <ListItem
                  text="Blue"
                  onPress = {() => this.handleThemes(styles.$blue)}
                  checkMark = {false}
                  selected
                  iconBackground = {styles.$blue}
                  />
                  <Seperator/>
                  <ListItem
                  text="Orange"
                  onPress = {() => this.handleThemes(styles.$orange)}
                  checkMark = {false}
                  selected
                  iconBackground = {styles.$orange}
                  />
                  <Seperator/>
                  <ListItem
                  text="Green"
                  onPress = {() => this.handleThemes(styles.$green)}
                  checkMark = {false}
                  selected
                  iconBackground = {styles.$green}
                  />
                  <Seperator/>
                  <ListItem
                  text="Purple"
                  onPress = {() => this.handleThemes(styles.$purple)}
                  checkMark = {false}
                  selected
                  iconBackground = {styles.$purple}
                  />
                  <Seperator/>
            </ScrollView>
        )
    }
}

export default connect()(Themes)