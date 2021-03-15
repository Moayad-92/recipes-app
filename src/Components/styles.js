import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

export const custom_button = StyleSheet.create({
  container: {
    width: device_size.width / 2,
    padding: 10,
    backgroundColor: '#ef6c00',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export const loading = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
