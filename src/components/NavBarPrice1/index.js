import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

function NavBarPrice1(props) {
  return (
    <Image style={[styles.container, props.style]} source={Images.imgMap2}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.titleText}>{props.title}</Text>
        <TouchableOpacity onPress={props.onPress}>
          <Icon style={styles.iconStyle} name='ios-information-circle-outline'/>
        </TouchableOpacity>
      </View>
    </Image>
  );
}
export default NavBarPrice1;
