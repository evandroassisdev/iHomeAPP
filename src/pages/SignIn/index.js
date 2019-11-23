/* eslint-disable no-unneeded-ternary */
import React, {useRef, useState} from 'react';
import {Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  async function handleSubmit() {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      await AsyncStorage.setItem('@iHomeAPP:token', response.data.token);
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert('Erro de Login', 'Não foi possivel fazer o Login');
    }
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={text => setEmail(text)}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={text => setPassword(text)}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar Conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
