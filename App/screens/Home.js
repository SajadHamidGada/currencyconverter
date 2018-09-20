import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, StatusBar, KeyboardAvoidingView} from 'react-native';
import Container from '../component/container/Container';
import Logo from '../component/logo/Logo';
import InputWithButton from '../component/TextInput/InputWithButton';
import Header from '../component/Header/Header';
import Button from '../component/Button/Button';
import LastConverted from '../component/Text/LastConverted';
import CurrenciesList from './CurrenciesList';
import {ChangeCurrency, SwapCurrency} from '../Action/Currencies';


// const tempBaseCurrency = 'USD';
// const tempQuoteCurrency = 'GBP';
// const tempBaseValue = '100';
// const tempQuoteValue = '79.74';
// const tempConversionRate = '0.7974';
// const tempDate = new Date();

const mapStateToProps = (state) => {
    const  baseCurrency = state.Reducers.baseCurrency;
    const quoteCurrency = state.Reducers.quoteCurrency;
    const amount = state.Reducers.amount;
    const conversionSelector = state.Reducers.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    return {
        baseCurrency,
        quoteCurrency,
        amount,
        conversionRate:rates[quoteCurrency] || 0,
        isFetching:conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        primaryColor:state.Themes.primaryColor
    
    }
}


 class Home extends Component {
    handleTempBaseCurrency = () => {
        this.props.navigation.navigate("CurrenciesList",{title: 'Base Currencies',type:'base'})
    }
    handleTempQuoteCurrency = () => {
        this.props.navigation.navigate("CurrenciesList",{title: 'Quote Currencies',type:'quote'})
    }
    handleChangeText = (text) => {
        this.props.dispatch(ChangeCurrency(text))
    }
    handleOnPressOption = () => {
       this.props.navigation.navigate('Option')
    }
    handleSwapCurrencies = () => {
        this.props.dispatch(SwapCurrency())
    }
    render() {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if(this.props.isFetching) {
            quotePrice = '...'
        }
        return (
            <Container backgroundColor= {this.props.primaryColor}>
                <StatusBar translucent={false} barStyle='light-content' />
                <Header onPress={this.handleOnPressOption} />

                 <KeyboardAvoidingView
                behavior = 'padding'
                >
                <Logo tintColor = {this.props.primaryColor} />
                <InputWithButton
                    onPress={this.handleTempBaseCurrency}
                    buttonText={this.props.baseCurrency}
                    defaultValue={this.props.amount.toString()}
                    keyboardType='numeric'
                    onChangeText={this.handleChangeText}
                    textColor={this.props.primaryColor}

                />
                <InputWithButton
                    onPress={this.handleTempQuoteCurrency}
                    buttonText={this.props.quoteCurrency}
                    value={quotePrice}
                    editable={false}
                    textColor={this.props.primaryColor}

                />
                
                <LastConverted base = {this.props.baseCurrency} quote = {this.props.quoteCurrency} conversionRate = {this.props.conversionRate} date = {this.props.lastConvertedDate}  />
                
                <Button
                    text='Reverse Currencies'
                    onPress={this.handleSwapCurrencies}
                    
                />
               
               </KeyboardAvoidingView>

            </Container>
        )
    }
}
export default connect(mapStateToProps)(Home)