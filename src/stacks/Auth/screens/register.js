import React from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, KeyboardAvoidingView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Input, Button, TextButton } from '../../../components';
import { register } from '../ducks';

import styles from './styles';
import i18n from '../../../config/lang';


const validationSchema = yup.object().shape({
  email: yup.string().email(i18n.t('emailInvalid')).required(i18n.t('emailRequired')),
  password: yup.string().required(i18n.t('passwordRequired'))
})


const Register = () => {
  const { loading, error, user, ...params } = useSelector(state => state.auth);

  const { control, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema)
  })
  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(register(values));
  }

  return (
    <Container style={styles.container}>
      <KeyboardAvoidingView behaviour="padding">
        <Input 
          name="email" 
          label={i18n.t('email')} 
          control={control} 
          errors={errors} 
        />
        <Input 
          name="password" 
          label={i18n.t('password')} 
          secureTextEntry 
          control={control} 
          errors={errors} 
        />
        {loading 
          ? <ActivityIndicator size={32} color="#2196f3" /> 
          : <Button title={i18n.t("register")} onPress={handleSubmit(onSubmit)} />
        }
      </KeyboardAvoidingView>

      <TextButton 
        onPress={() => navigation.navigate('Register')} 
        title={i18n.t('alreadyHaveAnAccount')} 
      />
    </Container>
  );
}

export default Register;