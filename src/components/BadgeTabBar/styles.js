import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme/';

export default StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
    alignItems: 'center',
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  circleStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.primarySecondary,
  },
});
