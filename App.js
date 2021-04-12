
import React from 'react';
import {SafeAreaView} from 'react-native';
import HomePage from './screens/HomePage';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
    };

  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
       <HomePage />
      </SafeAreaView>
    );
  }
}


