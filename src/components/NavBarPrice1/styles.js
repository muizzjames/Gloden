import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.navBarHeightSecond - 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.brandPrimary,
  },
  titleText: {
    color: 'white',
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.boldSemi,
    backgroundColor: 'transparent',
  },
  iconStyle: {
    color: 'white',
    fontSize: Fonts.size.input,
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginTop: 3,
    fontWeight: 'bold',
  },
});
