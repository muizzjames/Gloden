import 'react-native';
import React from 'react';
import NavBarGatehub2 from '../src/components/NavBarGatehub2/';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBarGatehub2 month={12} />
  );
});
