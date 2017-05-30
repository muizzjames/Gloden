import React, { Component } from 'react';
import { View, Text } from 'react-native-animatable';
import { Image, TouchableOpacity } from 'react-native';
import { Styles, Colors, Images } from '@theme/';
import styles from './styles';

function HomeTabBar(props) {
  return (
    <View style={styles.container} animation={props.animation} duration={600}>
      <TouchableOpacity
        style={[Styles.center, styles.button]}
        onPress={() => props.onTabPress(0)}>
        <Image
          style={styles.iconStyle}
          source={Images.imgMessaging}
        />
        {
          props.messagingBadge ? (
          <Image style={styles.badgeIcon} source={Images.imgBadge}>
            <Text style={styles.badgeText}>{props.messagingBadge}</Text>
          </Image>) : null
        }
        <Text style={styles.textStyle}>Messaging</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.center, styles.button]}
        onPress={() => props.onTabPress(1)}>
        <Image
          style={[styles.iconStyle, { height: 18 }]}
          source={Images.imgActivities}
        />
        {
          props.messagingBadge ? (
          <Image style={styles.badgeIcon} source={Images.imgBadge}>
            <Text style={styles.badgeText}>{props.activitiesBadge}</Text>
          </Image>) : null
        }
        <Text style={styles.textStyle}>Activities</Text>
      </TouchableOpacity>
      <View style={[Styles.center, styles.button]}>

      </View>
      <TouchableOpacity
        style={[Styles.center, styles.button]}
        onPress={() => props.onTabPress(2)}>
        <Image
          style={[styles.iconStyle, { height: 18 }]}
          source={Images.imgWallet}
        />
        {
          props.messagingBadge ? (
          <Image style={styles.badgeIcon} source={Images.imgBadge}>
            <Text style={styles.badgeText}>{props.walletBadge}</Text>
          </Image>) : null
        }
        <Text style={styles.textStyle}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.center, styles.button]}
        onPress={() => props.onTabPress(3)}>
        <Image
          style={styles.iconStyle}
          source={Images.imgMore}
        />
        <Text style={styles.textStyle}>More</Text>
      </TouchableOpacity>
    </View>
  );
}
export default HomeTabBar;
