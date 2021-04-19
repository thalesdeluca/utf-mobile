import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Input, Button } from '../../../components';
import { login } from '../ducks';

import styles from './styles';

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required('Email is Required'),
  password: yup.string().required("Password is required")
})
// import { Container } from './styles';

const Login = () => {
  const { control, register, errors, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema)
  })
  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(login(values));
  }


  return (
    <Container style={styles.container}>
      <KeyboardAvoidingView behaviour="padding">
        <Input 
          name="email" 
          label="Email" 
          control={control} 
          errors={errors} 
        />
        <Input 
          name="password" 
          label="Password" 
          secureTextEntry 
          control={control} 
          errors={errors} 
        />

        <Button title="Log in" onPress={handleSubmit(onSubmit)}/>
      </KeyboardAvoidingView>
    </Container>
  );
}

export default Login;