import 'react-native';
import React from 'react';
import CircleButton from '../src/components/CircleButton/';
import {Styles} from '@theme/';

// Footer Component
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <CircleButton
        style={Styles.buttonCircle}
        radius={80}
        onPress={()=> alert('Profile')}
        avatar={''}
        animation={''}
    />
  );
});
