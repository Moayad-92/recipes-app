import React from 'react';
import {SafeAreaView} from 'react-native';
import {EmptyList} from './components/EmptyList';

export function Favorites({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <EmptyList onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
