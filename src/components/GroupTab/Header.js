import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
import { MKButton } from 'react-native-material-kit';

function Header (props) {
  return (
      <View
        style={{
          flex: 1,
          flexDirection:'row',
          height: Metrics.listItemHeight,
          backgroundColor: Colors.tabItemColor,
          paddingHorizontal: Metrics.listItemMarginHorizontal,}} >
        <View style={{
          flex: 0.5,
          flexDirection:'row',      
          alignItems:'center',
          justifyContent:'flex-start',
          paddingVertical: Metrics.listItemPaddingVertical1,
        }}>
          <Text style={{
            color: Colors.textPrimary,
            fontSize: Fonts.size.mini,
            lineHeight: Fonts.size.mini
            }}> { props.data.item1 }</Text>
        </View>
        <View style={{
          flex: 0.5,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-end',
          paddingVertical: Metrics.listItemPaddingVertical2,
        }}>
          <Text style={{
            color: Colors.textPrimary,
            fontSize: Fonts.size.mini }}>{ props.data.item2 }</Text>
        </View>
      </View>
  )
};

export default Header;