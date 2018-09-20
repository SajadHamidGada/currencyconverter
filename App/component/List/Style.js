import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native'
export default EStyleSheet.create({
    $underlayColor: '$lightGray',
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor:'$white'
    },
    text:{
             color:'$darkText',
            fontSize: 16,
            
    },
    seperator:{
        marginLeft: 20,
        flex: 1,
        backgroundColor:'$border',
        height:StyleSheet.hairlineWidth,
    },
    imageContainer:{
            backgroundColor:'transparent',
            width:30,
            height:30,
            borderRadius: 15,
            justifyContent:'center',
            alignItems: 'center',
    },
    iconVisible:{
        backgroundColor:'$primaryBlue'
    },
    icon:{
            width:16
    }
});



