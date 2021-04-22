import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Assets/colors';

const device_size = Dimensions.get('window');

export const meal_details = StyleSheet.create({
  container: {
    flex: 1,
  },
  title_container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center',
    textAlign: 'center',
  },
  image: {
    height: device_size.height / 4,
    width: device_size.width / 2,
    borderRadius: 100,
    marginVertical: 15,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  area_container: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 12,
  },
  area_text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0006',
    fontFamily: 'Arial',
  },
  instructions_container: {
    marginVertical: 10,
    padding: 20,
    // backgroundColor: colors.gray,
    // borderRadius: 10,
    // borderColor: colors.border,
    // borderWidth: 1,
  },
  instructions_header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  instructions_text: {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: 20,
  },
  youtube_container: {
    backgroundColor: colors.primary,
    width: device_size.width / 2,
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  youtube_text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
