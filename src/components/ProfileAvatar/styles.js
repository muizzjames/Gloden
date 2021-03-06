import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  centerView: {
    borderColor: Colors.brandSecondary,
    borderWidth: 1,
  },
  textStyle: {
    marginTop: 10,
    color: Colors.textPrimary,
    fontFamily: Fonts.type.boldSemi,
    fontSize: Fonts.size.normal,
  }
});
