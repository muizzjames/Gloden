import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

function NavBarGatehub3(props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: -7 }}>
        <Text style={styles.titleText}>Total balance</Text>
      </View>
      <View style={styles.currencyView}>
        <View style={{ width: 10 }}/>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.currencyText}>{props.price}</Text>
          <Text style={{ color: 'white', marginTop: 10 }}>{props.currency}</Text>
        </View>
        <TouchableOpacity onPress={props.onPressFilter}>
          <Icon style={styles.iconStyle} name='ios-funnel'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default NavBarGatehub3;
