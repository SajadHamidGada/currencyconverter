import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './Style'
import color from 'color';
const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props
  const container = [styles.container];
  if (editable == false){
    container.push(styles.disbaledInput)
  }
  const buttonStyle= [styles.text];
  if(props.textColor){buttonStyle.push({color:props.textColor})}
  const underlayColor = color(styles.$backgroundColorBase).darken(styles.$backgroundColorModifier)
  return (
    <View style={container}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={buttonStyle} >{buttonText}</Text>

      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput underlineColorAndroid = 'transparent' style={styles.textInput} {...props} />
    </View>
  )
}

export default InputWithButton;