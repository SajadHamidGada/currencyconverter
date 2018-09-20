import {SWAP_CURRENCY, CHANGE_CURRENCY, GET_INITIAL_CONVERSION,CONVERSION_ERROR,CONVERSION_RESULT} from '../Action/Currencies';
import {takeEvery,select,call,put} from 'redux-saga/effects'

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

const fetchTheLatestConversions = function* (action){
    try{
        let currency = action.currency;
    if(currency === undefined){
        currency = yield select(state => state.Reducers.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json()
    if(result.error){
        yield put({type:CONVERSION_ERROR,error:result.error})
    }else{
        yield put({type:CONVERSION_RESULT,result})
    }
    } catch(e){yield put({type:CONVERSION_ERROR,error:e.message})}
}
const rootSaga =  function* (){
    yield takeEvery(GET_INITIAL_CONVERSION, fetchTheLatestConversions);
    yield takeEvery(CHANGE_CURRENCY, fetchTheLatestConversions);
    yield takeEvery(SWAP_CURRENCY, fetchTheLatestConversions)
};
export default rootSaga;