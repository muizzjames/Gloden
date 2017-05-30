import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.navBarHeight - 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.brandPrimary,
    paddingHorizontal: Metrics.listItemMarginHorizontal,
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontSize: Fonts.size.small,
    marginRight: 5,
    fontFamily: Fonts.type.bold,
  },
});
