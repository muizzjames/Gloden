import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

function NavBarPrice2(props) {
  return (
    <Image style={[styles.container, props.style]} source={Images.imgMap3}>
      <View  style={{ flexDirection: 'row' }}>
        <Text style={styles.currencyText}>{props.price}</Text>
        <Text style={{ color: 'white', marginTop: 10 }}>{props.currency}</Text>
      </View>
    </Image>
  );
}
export default NavBarPrice2;
