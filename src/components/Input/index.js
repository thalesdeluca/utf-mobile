import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Input = ({ control, name, label, defaultValue, errors = {}, ...props}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label || name}</Text>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                {...props}
              />
            )}
            name={name}
    
            defaultValue={defaultValue}
          />
        {errors?.[name] && <Text>This is required.</Text>}
      </View>
    )
}

export { Input };