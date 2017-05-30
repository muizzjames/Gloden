import 'react-native';
import React from 'react';
import NavBarMain from '../src/components/NavBarMain/';

// Header Component
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBarMain title='WalletTest' leftIcon='chevron-left' rightIcon=''/>
  );
});
