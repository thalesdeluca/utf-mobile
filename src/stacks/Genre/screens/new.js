import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Button, KeyboardAvoidingView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup'; 
import { Container, Input } from '../../../components';
import i18n from '../../../config/lang';
import styles from '../../Auth/screens/styles';
import { getGenres, saveGenre } from '../ducks';


const validationSchema = yup.object().shape({
  name: yup.string().required(i18n.t('nameRequired')),
})

const NewGenre = ({ navigation, route }) => {
  const { control, register, formState: { errors }, setValue, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { loading, error, genres, success, ...params } = useSelector(state => state.genres);
  const { params: item } = route;
  const [sent, setSent] = useState(false);

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    console.log("values", values)
    dispatch(saveGenre({ id: item?.id, ...values }));
    setSent(true)
    setTimeout(() => {
      setSent(false)
    }, 500)
  }

  useEffect(() => {
    if(item) {
      setValue('name', item?.name);
    }
  }, [item])

  useEffect(() => {
    if(success && sent) {
     navigation.goBack();
     dispatch(getGenres())
    }
  }, [success, sent])


  return (
    <Container style={styles.container}>
      <KeyboardAvoidingView behaviour="padding">
        <Input 
          name="name" 
          label={i18n.t('name')} 
          control={control} 
          errors={errors} 
        />

        {loading 
          ? <ActivityIndicator size={32} color="#2196f3" /> 
          : <Button title={i18n.t("save")} onPress={handleSubmit(onSubmit)} />
        }
      </KeyboardAvoidingView>
    </Container>
  );
}
export default NewGenre;