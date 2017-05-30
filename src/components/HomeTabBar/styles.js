import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.footerHeight,
    width: Metrics.screenWidth,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: Colors.brandSecondary,
    position: 'absolute',
    bottom: 0,
    padding: 5,
  },
  iconStyle: {
    width: Metrics.footerIconWidth,
    height: Metrics.footerIconHeight,
    resizeMode: 'stretch',
    tintColor: Colors.brandSecondary,
  },
  textStyle: {
    color: Colors.brandSecondary,
    fontSize: Fonts.size.small,
    marginTop: 7,
  },
  centerButton: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.textPrimary,
  },
  button: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  badgeIcon: {
    width: Metrics.screenWidth / 18,
    height: Metrics.screenWidth / 18,
    position: 'absolute',
    tintColor: Colors.brandPrimary,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  badgeText: {
    color: 'white',
    fontSize: Fonts.size.mini,
    backgroundColor: 'transparent',
  }
});
