import React from 'react';
import { View,  TouchableWithoutFeedback, Keyboard  } from 'react-native'
import style from './Style';

const Container = ({ children,backgroundColor }) => {
    const containerStyles = [style.container]
    if(backgroundColor){containerStyles.push({backgroundColor})}
    return (
        <TouchableWithoutFeedback
            onPress = {Keyboard.dismiss}
            >
            <View style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Container;