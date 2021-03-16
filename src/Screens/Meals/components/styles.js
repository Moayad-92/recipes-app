import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../../Assets/colors';

const device_size = Dimensions.get('window');

export const meal_item = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 15,
    alignItems: 'center',
    borderColor: colors.lighGray,
    borderBottomWidth: 2,
  },

  image: {
    flex: 1,
    height:
      Platform.OS === 'ios' ? device_size.height / 8 : device_size.height / 6,
    borderRadius: 1000,
    marginRight: 10,
    // borderColor: '#41a47a',
    // borderWidth: 1,
  },

  title: {
    flex: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
});
