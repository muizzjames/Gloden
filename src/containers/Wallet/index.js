import React from 'react';
import { Text, StyleSheet, ListView, ScrollView } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import NavBarMain from '@components/NavBarMain';

import HomeTabBar from '@components/HomeTabBar';
import CircleButton from '@components/CircleButton';
import { Fonts, Styles, Colors, Images } from '@theme/';
import ListItem from '@components/ListItem/ListItem1';
import NavBarPrice1 from '@components/NavBarPrice1';
import NavBarPrice2 from '@components/NavBarPrice2';
import HeaderCollapse from '@library/HeaderCollapse';
import MatButton from '@components/MatButton';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native-animatable';
import styles from './styles';
function Wallet(props) {

  return(
    <View style={[Styles.screen.mainContainer]}>
      <HeaderCollapse
        backgroundColor= { Colors.brandPrimary}
        content1={<NavBarPrice1 title='Total balance' onPress={() => alert('Total balence...')}/>}
        content2={<NavBarPrice2 price='17,643.00' currency='USD'/>}
        content3={<NavBarMain title='Wallet' image={Images.imgMap1}/>}
        scrollPos={props.scrollPos}
        easing="easeOutCubic"
      />
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
        locations={props.headerActive === 0 ? [0, 0.03] : [0, 0]}
        colors={props.headerActive === 0 ? ['rgba(0,0,0,0.8)', '#fff'] : ['#fff', '#fff']}>
        <ListView
          dataSource={props.dataSource}
          renderRow={(rowData) => <ListItem itemData={rowData} borderBottom={true}/>}
          onScroll={props.onListScroll}
          automaticallyAdjustContentInsets={false}
          bouncesZoom={false}
          onPanResponderTerminationRequest={false}
        />
      </LinearGradient>
      <HomeTabBar
        onTabPress={(tab) => alert(tab)}
        messagingBadge={13}
        activitiesBadge={3}
        walletBadge={1}
        msgBadge={3}
        animation={props.animation}
      />
      <View
        style={[styles.bottomBtnView, {bottom: props.scrollPos === 'down'? 40 : 80}]}
        animation={props.animationBtn}
        duration={800}>
        <MatButton text='SEND' onPress={() => Actions.pop()}/>
        <MatButton text='RECEIVE' onPress={() => alert('Receive')}/>
      </View>
      <CircleButton
        style={Styles.buttonCircle}
        radius={80}
        onPress={()=> alert('Profile')}
        avatar='https://facebook.github.io/react/img/logo_og.png'
        animation={props.animation}/>
    </View>
  )
};
export default Wallet;
