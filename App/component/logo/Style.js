import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';


const imageWidth = Dimensions.get('window').width / 2
export default EStyleSheet.create({
    $largeImageContainer: imageWidth,
    $largeImage:imageWidth/2,
    $smallImageContainer:imageWidth /2,
    $smallImage: imageWidth/4,
    container: {
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '$largeImageContainer',
        height: '$largeImageContainer',
    },
    image:{
        width: '$largeImage'
    },
    text:{
        fontWeight: '600',
        fontSize: 28,
        letterSpacing:- 0.5,
        marginTop: 15,
        color:'$white'
    }
});

