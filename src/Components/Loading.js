import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import { loading } from './styles';

export function Loading() {
  return (
    <SafeAreaView
      style={loading.container}>
      <LottieView
        style={{flex: 1}}
        autoPlay
        source={require('../Assets/loading.json')}
      />
    </SafeAreaView>
  );
}
