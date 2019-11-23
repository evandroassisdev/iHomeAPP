import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import createRouter from './routes';

export default function App() {
  const [token, setToken] = useState('');

  async function storageToken() {
    const getToken = await AsyncStorage.getItem('@iHomeAPP:token');
    setToken(getToken);
  }

  useEffect(() => {
    storageToken();
  }, [token]);
  console.log(token);
  const signed = token;

  const Routes = createRouter(signed);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
