import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
import { MKButton } from 'react-native-material-kit';

function ListItem1 (props) {
  return (
      <View
        style={{
          flex: 1,
          flexDirection:'row',
          height: Metrics.listItemHeight,
          borderBottomWidth: props.borderBottom === true ? 1 : 0,
          borderColor: Colors.dividerPrimary,
          marginHorizontal: Metrics.listItemMarginHorizontal, }} >
        <View style={{
          flex: 0.67,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start'}}>
          <Image
            style={{
              width: Metrics.listItemIconSize,
              height: Metrics.listItemIconSize,
              borderRadius: Metrics.listItemIconSize/2}}
            source={{uri: props.itemData.item1 }}
          />
          <View style={{
            flexDirection:'column',
            marginLeft: Metrics.listItemPaddingVertical2/2,
            paddingVertical: Metrics.listItemPaddingVertical2,
          }}>
            <Text style={{
              color: Colors.textPrimary,
              fontSize: Fonts.size.mini,
              lineHeight: Fonts.size.mini,
              marginBottom: Fonts.size.mini,
              backgroundColor: Colors.maskColor,
              }}>{ props.itemData.item2 }</Text>
            <Text style={{
              color: Colors.textSecondary,
              fontSize: Fonts.size.mini,
              backgroundColor: Colors.maskColor,
              lineHeight: Fonts.size.mini, }}>{ props.itemData.item3 }</Text>
          </View>
        </View>
        <View style={{
          flex: 0.33,
          flexDirection:'row',
          alignItems:'flex-end',
          justifyContent:'flex-end',
          paddingVertical: Metrics.listItemPaddingVertical2,
        }}>
          <Text style={{
            color: Colors.brandPrimary,
            backgroundColor: Colors.maskColor,
            fontSize: Fonts.size.mini }}>{ props.itemData.item4 }</Text>
        </View>
      </View>
  )
};

export default ListItem1;
