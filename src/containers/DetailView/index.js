import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import NavBarMain from '@components/NavBarMain';
import HomeTabBar from '@components/HomeTabBar';
import CircleButton from '@components/CircleButton';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
function DetailView() {
  return (
    <View style={Styles.screen.mainContainer}>
      <NavBarMain
        title='Detailed View'
        leftIcon='chevron-left'
        onLeftBtnPress={()=> Actions.pop()}
      />
      <View style={{ flex: 1 }}>
          <ScrollableTabView
            style={{ height: 30, height: Metrics.screenHeight - Metrics.footerHeight - 30 - Metrics.navBarHeight }}
            tabBarUnderlineStyle={{ backgroundColor: Colors.brandPrimary }}
            tabBarActiveTextColor={Colors.brandPrimary}
            tabBarInactiveTextColor={Colors.brandPrimary}
            tabBarTextStyle={{ fontFamily: Fonts.type.bold, marginTop: 10}}
            initialPage={0}
            onChangeTab={this.handleChangeTab}>
            <View tabLabel='ASSET' style={{backgroundColor: 'white', flex: 1}}>
            </View>
            <View tabLabel='ACCOUNT' style={{backgroundColor: 'white', flex: 1}}>
            </View>
          </ScrollableTabView>
      </View>
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
export default DetailView;
