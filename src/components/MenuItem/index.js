import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const MenuItem = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export { MenuItem }