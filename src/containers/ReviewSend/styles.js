import { StyleSheet, Platform } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  avatarView: {
    height: (Metrics.screenHeight - Metrics.navBarHeight - Metrics.footerHeight) / 2,
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  textTitle: {
    color: Colors.textSecondary,
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.medium,
  },
  textPrice: {
    color: Colors.brandPrimary,
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.h11,
  },
  feeView: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 10,
    paddingHorizontal: Metrics.listItemMarginHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: Colors.dividerPrimary,
    borderTopWidth: 0.5,
  },
  fab: {
    width: 36,
    height: 36,
    borderRadius: 18,
    shadowRadius: 12,
    shadowOpacity: 0.3
  },
  iconStyle: {
    color: Colors.brandPrimary,
    fontSize: 22,
  },
  buttonStyle: {
    height: Metrics.screenHeight / 14,
    backgroundColor: Colors.brandPrimary,
    marginHorizontal: Metrics.listItemMarginHorizontal,
    borderRadius: 3,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.normal,
  },
  buttonIcon: {
    color: 'white',
    fontSize: 20,
    marginTop: 3,
    marginLeft: 10,
  },
});
