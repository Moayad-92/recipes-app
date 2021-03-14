import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

export const meal_item = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 15,
    alignItems: 'center',
    borderColor: '#0001',
    borderBottomWidth: 2,
  },

  image: {
    flex: 1,
    height: device_size.height / 8,
    borderRadius: 1000,
    marginRight: 10,
    borderColor: '#41a47a',
    borderWidth: 1,
  },

  title: {
    flex: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef6c00',
    textAlign: 'center',
  },
});
