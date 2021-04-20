import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const TextButton = ({ title = "", onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export { TextButton };