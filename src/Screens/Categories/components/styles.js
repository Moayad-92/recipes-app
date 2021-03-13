import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const category_item = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    margin: 10,
    padding: 10,
    borderColor: '#41a47a',
    borderWidth: 1,
    borderRadius: 25,
  },

  image: {
    height: device_size.height / 8,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef6c00',
    textAlign: 'left',
  },
});

export {category_item};
