import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const inputHeight = 48;
const borderRadius = 4
// const imageWidth = Dimensions.get('window').width / 2
export default EStyleSheet.create({
    $backgroundColorBase : '$white',
    $backgroundColorModifier :  0.4,
    container: {
        backgroundColor:'$white',
        flexDirection: 'row',
        alignItems: 'center',
        width:'90%',
        height:inputHeight,
        borderRadius:borderRadius,
        marginVertical: 11,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height:inputHeight,
        backgroundColor:'$white',
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
    },
    border:{
            height:inputHeight,
            width: StyleSheet.hairlineWidth,
            backgroundColor:'$border'
    },
    textInput:{
            height:inputHeight,
            color:'$inputText',
            flex: 1,
            paddingHorizontal: 8,
            fontSize:16
    },
    disbaledInput:{
        backgroundColor: '$lightGray'
    },
    text:{
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color:'$primaryBlue'
    }
});

