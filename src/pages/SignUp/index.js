import React, {useRef, useState} from 'react';
import {Image, Alert} from 'react-native';

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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit() {
    try {
      await api.post('/users', {
        username,
        email,
        password,
      });
      Alert.alert('Uhulll', 'Conta Criada com Sucesso');
      setTimeout(() => {
        navigation.navigate('SignIn');
      }, 3000);
    } catch (err) {
      Alert.alert('Opsss...', 'Houve um problema, tente novamente.');
    }
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={t => setUsername(t)}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={t => setEmail(t)}
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
            onChangeText={t => setPassword(t)}
          />
          <SubmitButton onPress={handleSubmit}>Criar Conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
