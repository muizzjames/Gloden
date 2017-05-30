import { Platform } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const Styles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
      borderTopColor: Colors.frost,
      borderTopWidth: 0.5,
      borderBottomColor: Colors.frost,
      borderBottomWidth: 1,
    },
    sectionText: {
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
  },
  fullScreen: {
    width: Metrics.screenWidth,
    ...Platform.select({
      ios: {
        paddingBottom: 0,
        height: Metrics.screenHeight,
      },
      android: {
        paddingBottom: 0,
        height: Metrics.screenHeight + 24,
      },
    }),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonShadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: Platform.OS === 'ios' ? 8 : 4,
    },
    shadowColor: '#029c1f',
    shadowRadius: 8,
    elevation: 3,
  },
  buttonShadowSmall: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 3,
    },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 3,
  },
  buttonCircle: {
    position: 'absolute',
    left: ( Metrics.screenWidth - 80 ) / 2,
    bottom: 5,
  }
};

export default Styles;
