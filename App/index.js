import React from 'react';
import {Provider} from 'react-redux';
import Store from './Config/Store';
import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
// import CurrenciesList from './screens/CurrenciesList';
// import Option from './screens/Option';
// import Themes from './screens/Themes';

import Navigator from './Config/Route';
// import AlertProvider from './component/Alert/AlertProvider'

EStyleSheet.build({
  $primaryBlue : '#4F6D7A',
  $primaryOrange:'#D57A66',
  $primaryGreen:'#00BD9D',
  $primaryPurple:'#9E768F',
  $white:'#fff',
  $border:'#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText:'#323232',
});



// export default () => <Home />

// export default () => <CurrenciesList />

// export default () => <Option />

// export default () => <Themes />

// export default () => <AlertProvider><Navigator /></AlertProvider>
export default () => <Provider store = {Store} ><Navigator onNavigationStateChange = {null} /></Provider>


