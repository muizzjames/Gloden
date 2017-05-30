import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Platform.OS === 'ios' ? Metrics.navBarHeight : Metrics.navBarHeight + 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.brandPrimary,
    paddingHorizontal: Metrics.listItemMarginHorizontal,
  },
  titleText: {
    color: 'white',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.boldSemi,
  },
  iconStyle: {
    color: 'white',
    fontSize: Fonts.size.input,
    marginLeft: 10,
    marginTop: 3,
    fontWeight: 'bold',
  },
  currencyText: {
    color: 'white',
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.light,
  },
  currencyView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.listItemMarginHorizontal,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
});
