import 'react-native';
import React from 'react';
import NavBarPrice1 from '../src/components/NavBarPrice1/';

// Header Component
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBarPrice1 title='WalletTest'/>
  );
});
