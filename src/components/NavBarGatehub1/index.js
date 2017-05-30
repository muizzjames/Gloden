import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';
import Switch from '@library/Switch';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

function NavBarGatehub1(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[Styles.center, { flexDirection: 'row' }]}
        onPress={() => alert('Month')}
      >
        <Text style={styles.textStyle}>
          Last {props.month} months
        </Text>
        <View>
          <Icon
            name='ios-arrow-down'
            style={[styles.textStyle, { fontSize: Fonts.size.regular, fontWeight: 'bold', marginTop: 5 }]}
          />
        </View>
      </TouchableOpacity>
      <View style={[Styles.center, { flexDirection: 'row' }]}>
        <Text style={styles.textStyle}>
          Visible on Summary screen
        </Text>
        <Switch
          backgroundActive={Colors.brandThird}
        />
      </View>
    </View>
  );
}
export default NavBarGatehub1;
