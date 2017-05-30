import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  bottomBtnView: {
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.listItemMarginHorizontal,
    position: 'absolute',
    bottom: Metrics.footerHeight + 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
