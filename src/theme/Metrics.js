import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeightTmp = width < height ? height : width;
const bottomMargin = 24;
// Used via Metrics.baseMargin
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: (Platform.OS === 'ios') ? screenHeightTmp : screenHeightTmp - bottomMargin,
  navBarHeight: (Platform.OS === 'ios') ? 70 : 50,
  navBarHeightSecond: 60,
  listItemMarginHorizontal: 14,
  listItemHeight: 70,
  listItemPaddingVertical1: 30,
  listItemPaddingVertical2: 20,
  listItemIconSize: 50,
  statusBarHeight: 20,
  footerHeight: 60,
  footerIconWidth: 23,
  footerIconHeight: 22,
};

export default metrics;
