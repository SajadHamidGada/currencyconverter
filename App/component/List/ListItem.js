import React from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import CheckIcon from './CheckIcon';
import styles from './Style';


const ListItem = ({text,onPress,selected = false, checkMark = true, visible = true,customIcon = null,iconBackground}) => (
    <TouchableHighlight
    onPress = {onPress}
    underlayColor={styles.$underlayColor}
    >
    <View style= {styles.container}>
        <Text style= {styles.text}>{text}</Text>
        {selected ? <CheckIcon checkMark = {checkMark} visible = {visible} iconBackground = {iconBackground}  /> : <CheckIcon /> }
        {customIcon}
    </View>
    </TouchableHighlight>
     
)

export default ListItem;