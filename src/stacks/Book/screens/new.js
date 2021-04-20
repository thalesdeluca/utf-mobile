import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Button, KeyboardAvoidingView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup'; 
import { Container, Input } from '../../../components';
import i18n from '../../../config/lang';
import styles from '../../Auth/screens/styles';
import { getBooks, saveBook } from '../ducks';

const validationSchema = yup.object().shape({
  title: yup.string().required(i18n.t('nameRequired')),
  description: yup.string().required(i18n.t('descriptionRequired'))
})

const NewBook = ({ navigation, route }) => {
  const { control, register, formState: { errors }, setValue, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { loading, error, books, success, ...params } = useSelector(state => state.books);
  const { params: item } = route;
  const [sent, setSent] = useState();

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(saveBook({ id: item?.id, ...values }));
    setSent(true)
    setTimeout(() => {
      setSent(false)
    }, 500)
  }

  useEffect(() => {
    if(item) {
      setValue('title', item?.title);
      setValue('description', item?.description);
    }
  }, [item])

  useEffect(() => {
    if(success && sent) {
     navigation.goBack();
     dispatch(getBooks())
    }
  }, [success, sent])


  return (
    <Container style={styles.container}>
      <KeyboardAvoidingView behaviour="padding">
        <Input 
          name="title" 
          label={i18n.t('title')} 
          control={control} 
          errors={errors} 
        />
        <Input 
          name="description" 
          label={i18n.t('description')} 
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

export default NewBook;