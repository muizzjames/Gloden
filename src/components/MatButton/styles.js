import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme/';

export default StyleSheet.create({
  button: {
    width: Metrics.screenWidth / 2 - 20,
    height: Platform.OS === 'ios' ? Metrics.screenHeight / 20 : Metrics.screenHeight / 18,
    backgroundColor: Colors.brandPrimary,
    borderRadius: 2,
  },
  textStyle: {
    color: 'white',
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.bold,
  }
});
