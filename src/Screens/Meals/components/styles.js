import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

export const meal_item = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 15,
    alignItems: 'center',
    borderColor: '#41a47a',
    borderBottomWidth: 2,
  },

  image: {
    flex: 1,
    height: device_size.height / 6,
    borderRadius: 100,
    marginRight: 10,
    borderColor: '#41a47a',
    borderWidth: 2,
  },

  title: {
    flex: 1.3,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef6c00',
    textAlign: 'center',
  },
});
