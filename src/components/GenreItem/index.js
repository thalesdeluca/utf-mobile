import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const GenreItem = ({ name= "", ...props }) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default GenreItem;