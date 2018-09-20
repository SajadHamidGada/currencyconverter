import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import styles from './Style'

const LastConverted = ({base, quote, conversionRate, date}) => (
            <Text style={styles.text}>
             1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D YYYY')}
            </Text>
    
)

export default LastConverted;