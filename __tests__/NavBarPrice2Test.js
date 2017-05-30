import 'react-native';
import React from 'react';
import NavBarPrice2 from '../src/components/NavBarPrice2/';

// Header Component
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBarPrice2 price='17,643.00' currency='USD'/>
  );
});
