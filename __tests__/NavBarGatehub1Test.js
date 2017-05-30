import 'react-native';
import React from 'react';
import NavBarGatehub1 from '../src/components/NavBarGatehub1/';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBarGatehub1 month={12} />
  );
});
