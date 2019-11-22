import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StatusBar, AsyncStorage} from 'react-native';
import {StackActions, NavigationAction} from 'react-navigation';

import api from '../../services/api';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default class SignInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo
          source={require('../../images/airbnb_logo.png')}
          resizeMode="contain"
        />
      </Container>
    );
  }
}
