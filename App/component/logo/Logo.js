import React from 'react';
import { View, ImageBackground, Image, Text,Keyboard,Animated,StyleSheet,Platform } from 'react-native';
import styles from './Style'

const  ANIMATED_DURATION = 4;

class Logo extends React.Component{
    constructor(props) {

        super(props);
    
    
    
        this.state = {
    
          containerImageWidth: new Animated.Value(styles.$largeImageContainer),
    
          imageWidth: new Animated.Value(styles.$largeImage),
    
        };
    
      }

    componentDidMount(){
        let keyboardShowing = 'keyboardWillShow';
        let keyboardHiding = 'keyboardWillHide';
        if(Platform.OS === 'android'){
             keyboardShowing = 'keyboardDidShow';
             keyboardHiding = 'keyboardDidHide';
        }
        this.keyboardShowListener = Keyboard.addListener(keyboardShowing , this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(keyboardHiding, this.keyboardHide);
        }
    componentWillUnmount(){
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }
    keyboardShow = () =>{
       Animated.parallel([
        Animated.timing(this.state.containerImageWidth,{
            toValue:styles.$smallImageContainer,
            duration: ANIMATED_DURATION
        }),
        Animated.timing(this.state.imageWidth,{
            toValue:styles.$smallImage,
            duration: ANIMATED_DURATION
        }),
       ]).start();
    }
    keyboardHide = () =>{
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth,{
                toValue:styles.$largeImageContainer,
                duration: ANIMATED_DURATION
            }),
            Animated.timing(this.state.imageWidth,{
                toValue:styles.$largeImage,
                duration: ANIMATED_DURATION
            }),
           ]).start();
    }
    render(){
            const containerImageStyles = [

                styles.imageContainer,
          
                { width: this.state.containerImageWidth, height: this.state.containerImageWidth },
          
              ];
          
              const imageStyles = [
          
                styles.image,
          
                { width: this.state.imageWidth },
          
                this.props.tintColor ? { tintColor: this.props.tintColor } : null,
          
              ];
              return (
          
                <View style={styles.container}>
          
                  <Animated.View style={containerImageStyles}>
          
                    <Animated.Image
          
                      resizeMode="contain"
          
                       style={[StyleSheet.absoluteFill, containerImageStyles]}
          
                      source={require('./images/background.png')}
          
                    />
          
                    <Animated.Image
          
                      resizeMode="contain"
          
                    style={imageStyles}
          
                      source={require('./images/logo.png')}
          
                    />
          
                  </Animated.View>
          
                  <Text style={styles.text}>Currency Converter</Text>
          
                </View>
          
              );
          

          
          

    }
}

export default Logo;