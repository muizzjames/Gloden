import React from 'react';
import { Text, StyleSheet, ListView, ScrollView, View } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import NavBarMain from '@components/NavBarMain';
import HomeTabBar from '@components/HomeTabBar';
import CircleButton from '@components/CircleButton';
import BadgeTabBar from '@components/BadgeTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Fonts, Styles, Colors } from '@theme/';
import styles from './styles';

function Activities(props) {
  return(
    <View style={[Styles.screen.mainContainer]}>
      <NavBarMain
        title={'Activities'}
        leftIcon={'chevron-left'}
        rightIcon={'filter'}
        onLeftBtnPress={()=> Actions.pop()}
        onRightBtnPress={()=> alert('FILTER')}
      />
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <BadgeTabBar />}
      >
        <View tabLabel='NOTIFICATIONS' style={{backgroundColor: 'red', width: 300, height: 300}}></View>
        <View tabLabel='ATTENTIONS' style={{backgroundColor: 'blue', width: 300, height: 300}}></View>
        <View tabLabel='TRANSACTIONS' style={{backgroundColor: 'green', width: 300, height: 300}}></View>
      </ScrollableTabView>
      <HomeTabBar
        onTabPress={(tab) => alert(tab)}
        messagingBadge={13}
        activitiesBadge={3}
        walletBadge={1}
        msgBadge={3}
        animation={props.animation}
      />
      <CircleButton
        style={Styles.buttonCircle}
        radius={80}
        onPress={()=> alert('Profile')}
        avatar='https://facebook.github.io/react/img/logo_og.png'
        animation={props.animation}/>
    </View>
  )
};
export default Activities;
