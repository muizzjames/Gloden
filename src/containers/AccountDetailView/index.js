import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import NavBarMain from '@components/NavBarMain';
import CircleButton from '@components/CircleButton';
import HomeTabBar from '@components/HomeTabBar';
import { Fonts, Styles } from '@theme/';
function AccountDetailView() {
  return (
    <View style={Styles.screen.mainContainer}>
      <NavBarMain
        title='Account Detailed View'
        leftIcon='chevron-left'
        onLeftBtnPress={()=> Actions.pop()}
      />
      <HomeTabBar
        onTabPress={(tab) => alert(tab)}
        messagingBadge={13}
        activitiesBadge={3}
        walletBadge={1}
        msgBadge={3}
      />
      <CircleButton
        style={Styles.buttonCircle}
        radius={80}
        onPress={()=> alert('Profile')}
        avatar='https://facebook.github.io/react/img/logo_og.png'/>
    </View>
  )
};
export default AccountDetailView;
