import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Container = ({children, style: customStyle, ...props}) => {
  return (
    <View 
      style={[styles.container, customStyle]} {...props}>
        {children}
    </View>
  );
}

export { Container };