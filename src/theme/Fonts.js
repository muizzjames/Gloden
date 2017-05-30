const type = {
  regular: 'OpenSans-Regular',
  italic: 'OpenSans-Italic',
  light: 'OpenSans-Light',
  lightItalic: 'OpenSans-LightItalic',
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  boldExtra: 'OpenSans-ExtraBold',
  boldExtraItalic: 'OpenSans-ExtraBoldItalic',
  boldSemi: 'OpenSans-Semibold',
  boldSemiItalic: 'OpenSans-SemiboldItalic',
};
const size = {
  h1: 58,
  h11: 40,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  normal: 16,
  medium: 14,
  small: 12,
  mini: 10,
  tiny: 8.5,
};

const style = {
  h1: {
    fontSize: size.h1,
    backgroundColor: 'transparent',
  },
  h2: {
    fontSize: size.h2,
    backgroundColor: 'transparent',
  },
  h3: {
    fontSize: size.h3,
    backgroundColor: 'transparent',
  },
  h4: {
    fontSize: size.h4,
    backgroundColor: 'transparent',
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
    backgroundColor: 'transparent',
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
    backgroundColor: 'transparent',
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
    backgroundColor: 'transparent',
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontFamily: type.bold,
    fontSize: 15,
  },
  titleText: {
    fontSize: size.input,
    backgroundColor: 'transparent',
  },
};
export default {
  type,
  size,
  style,
};
