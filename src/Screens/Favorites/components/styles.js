import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

export const empty_list = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: 'grey', fontSize: 20, marginBottom: 30},
});
