import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import NavBarMain from '@components/NavBarMain';
import HomeTabBar from '@components/HomeTabBar';
import CircleButton from '@components/CircleButton';
import { Fonts, Styles } from '@theme/';
function Messaging() {
  return (
    <View style={Styles.screen.mainContainer}>
      <NavBarMain
        title='Messaging'
        leftIcon='chevron-left'
        rightIcon='ellipsis-v'
        onLeftBtnPress={()=> Actions.pop()}
        onRightBtnPress={()=> alert('option')}
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

export default Messaging;
