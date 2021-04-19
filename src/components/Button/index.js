import React from 'react';
import { View, Button as RNButton } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Button = ({ ...props}) => {
  return (
    <View style={styles.container}>
      <RNButton {...props}/>
    </View>
   
  )
}

export { Button };