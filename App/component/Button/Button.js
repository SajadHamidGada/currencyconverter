import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './Style'


const Button = ({text, onPress}) => (
  
    <TouchableOpacity
    style={styles.container}
    onPress = {onPress}
    >
        <View style={styles.wrapper}>
            <Image resizeMode='contain' style={styles.image} source={require('./images/icon.png')} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
)

export default Button;