import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.navBarHeight,
    flexDirection: 'row',
    backgroundColor: Colors.brandPrimary,
    paddingTop: (Platform.OS === 'ios') ? Metrics.statusBarHeight : 0,
  },
  subView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: Metrics.listItemMarginHorizontal,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerText: {
    color: 'white',
    fontSize: 23,
    fontFamily: Fonts.type.boldSemi,
    backgroundColor: 'transparent'
  },
  iconStyle: {
    color: 'white',
    fontSize: Fonts.size.h6,
    backgroundColor: 'transparent',
  },
});
