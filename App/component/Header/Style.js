import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
export default EStyleSheet.create({
   container:{
       position:'absolute',
       left:0,
       top:0,
       right:0,
       '@media ios' : {
           paddingTop: 20,
       },
    //    '@media andriod':{
    //        paddingTop:StatusBar.currentHeight ,
    //    }
    
   },
   button:{
       alignSelf: 'flex-end',
       paddingHorizontal: 20,
       paddingVertical: 5,
   },
   icon:{
       width:18
   }
});

