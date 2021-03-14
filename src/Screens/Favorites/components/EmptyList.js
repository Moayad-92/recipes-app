import React from 'react';
import {View, Text} from 'react-native';
import {CustomButton} from '../../../Components/CustomButton';
import {empty_list} from './styles';

export function EmptyList({onPress}) {
  return (
    <View style={empty_list.container}>
      <Text style={empty_list.text}>Your favorites is empty!</Text>
      <CustomButton title="Add some recipes" onClick={onPress} />
    </View>
  );
}
