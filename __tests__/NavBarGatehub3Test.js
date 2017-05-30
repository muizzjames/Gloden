import 'react-native';
import React from 'react';
import NavBarGatehub3 from '../src/components/NavBarGatehub3/';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBarGatehub3 price='17,643.00' currency='USD' />
  );
});
