import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';
const charWidth = Metrics.screenWidth - (Metrics.listItemMarginHorizontal * 2.5);

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Platform.OS === 'ios' ? Metrics.navBarHeight + 50 : Metrics.navBarHeight + 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.brandPrimary,
    paddingHorizontal: Metrics.listItemMarginHorizontal,
  },
  monthText: {
    width: charWidth,
    height: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
