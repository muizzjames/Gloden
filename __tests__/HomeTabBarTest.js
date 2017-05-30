import 'react-native';
import React from 'react';
import HomeTabBar from '../src/components/HomeTabBar/';

// Footer Component
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <HomeTabBar
        messagingBadge={13}
        activitiesBadge={3}
        walletBadge={1}
        msgBadge={3}
    />
  );
});
