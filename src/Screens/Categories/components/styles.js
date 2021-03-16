import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../Assets/colors';
const device_size = Dimensions.get('window');

export const category_item = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    margin: 10,
    padding: 10,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
  },

  image: {
    height: device_size.height / 8,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'left',
  },
});
