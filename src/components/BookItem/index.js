import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const BookItem = ({ title= "", description = "", ...props }) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  )
}

export default BookItem;