import React from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import NavBarMain from '@components/NavBarMain';
import NavBarGatehub1 from '@components/NavBarGatehub1';
import NavBarGatehub2 from '@components/NavBarGatehub2';
import NavBarGatehub3 from '@components/NavBarGatehub3';
import ListItem from '@components/ListItem/ListItem1';
import HomeTabBar from '@components/HomeTabBar';
import CircleButton from '@components/CircleButton';
import { Fonts, Styles, Colors } from '@theme/';
import HeaderCollapse from '@library/HeaderCollapse';

function Gatehub(props) {
  return (
    <View style={Styles.screen.mainContainer}>
      <NavBarMain
        title='Gatehub USD'
        leftIcon='chevron-left'
        onLeftBtnPress={()=> Actions.pop()}
      />
      <HeaderCollapse
        backgroundColor= { Colors.brandPrimary}
        content1={<NavBarGatehub2 month='11'/>}
        content2={<NavBarGatehub3
          price='17,643.00'
          currency='USD'
          onPressFilter={() => alert('Filter')}
        />}
        content3={<NavBarGatehub1 month='12'/>}
        scrollPos={props.scrollPos}
        easing="easeOutCubic"
      />
      <ListView
        dataSource={props.dataSource}
        renderRow={(rowData) => <ListItem itemData={rowData} borderBottom={true}/>}
        onScroll={props.onListScroll}
        automaticallyAdjustContentInsets={false}
        bouncesZoom={false}
        onPanResponderTerminationRequest={false}
      />
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
export default Gatehub;
