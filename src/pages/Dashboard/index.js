import React from 'react';
import {Text} from 'react-native';

// import { Container } from './styles';

export default function Dashboard() {
  return <Text>Dashboard</Text>;
}

Dashboard.navigationOptions = () => ({
  title: 'Dashboard',
  headerTitleStyle: {
    alignSelf: 'center',
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#7159c1',
    alignContent: 'center',
  },
  headerTintColor: '#FFF',
});
