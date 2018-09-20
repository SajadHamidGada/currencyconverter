import React from 'react';
import { View, Image } from 'react-native';
import style from './Style'

const CheckIcon = ({checkMark, visible,iconBackground}) => {
    const iconStyle = [style.imageContainer];
    if(visible){
        iconStyle.push(style.iconVisible)
    }
    if(iconBackground) {
        iconStyle.push({backgroundColor:iconBackground})
    }
    return (<View style = {iconStyle}>
        {checkMark ? <Image resizeMode='contain' style = {style.icon} source = {require('./images/check.png')} /> : null}
    </View>)
}

export default CheckIcon;