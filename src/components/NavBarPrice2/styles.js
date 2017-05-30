import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.navBarHeightSecond,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.brandPrimary,
  },
  currencyText: {
    color: 'white',
    fontSize: Fonts.size.h11,
    fontFamily: Fonts.type.light,
    backgroundColor: 'transparent',
  },
});
