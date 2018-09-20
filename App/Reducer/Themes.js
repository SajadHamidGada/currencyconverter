import {CHANGE_THEME} from '../Action/Themes';
// import Themes from '../screens/Themes';

const initialState = {
    primaryColor:'#4F6D7A'
};

 const Themes = (state=initialState,action) => {
    switch (action.type){
        case CHANGE_THEME:
          return {...state, primaryColor:action.color}
        default:
         return state
    }
   
}

export default Themes;