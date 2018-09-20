import React from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../component/List/ListItem';
import Seperator from '../component/List/Seperator';
import Currencies from '../Data/Currencies';
import {changeBaseCurrency,changeQuoteCurrency,getInitialConversion} from '../Action/Currencies';

const tempSelectedCurrency = 'CAD';
const mapStateToProps = state => {
    return {
        baseCurrency:state.Reducers.baseCurrency,
        quoteCurrency:state.Reducers.quoteCurrency,
        primaryColor:state.Themes.primaryColor
    }
}

class CurrenciesList extends React.Component{
    componentWillMount() {
        this.props.dispatch(getInitialConversion())
    }
    handleCurrenciesCheck = (currency) =>{
        const {type} = this.props.navigation.state.params;
        if(type === 'base'){
            this.props.dispatch(changeBaseCurrency(currency))
        } else if (type === 'quote'){
            this.props.dispatch(changeQuoteCurrency(currency))
        }
        this.props.navigation.goBack(null)
    }
    render(){
        let selectedCurrency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type === 'quote'){
            selectedCurrency = this.props.quoteCurrency;
        }
        return(
            <View style = {{flex:1}}>
               <StatusBar translucent = {false} barStyle = 'default' />
                <FlatList 
                    data = {Currencies}
                    renderItem = {({item}) => <ListItem 
                        text ={item} 
                        onPress = {() => this.handleCurrenciesCheck(item)} 
                        selected = {item === selectedCurrency} 
                        iconBackground = {this.props.primaryColor}
                        />}
                    keyExtractor = {item => item}
                    ItemSeparatorComponent = {Seperator}
                    />
            
            </View>
        )
    }
}

export default connect(mapStateToProps)(CurrenciesList)