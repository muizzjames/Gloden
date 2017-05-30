import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
import { MKButton } from 'react-native-material-kit';

function ListItem2 (props) {
  return (  
    <MKButton
      maskColor={Colors.maskColor}
      rippleColor={Colors.rippleColor}
      style={{
        flex: 1,
        flexDirection:'row',
        height: Metrics.listItemHeight,
        borderColor: Colors.dividerPrimary,
        borderBottomWidth: props.borderBottom === true ? 1 : 0,
        marginHorizontal: Metrics.listItemMarginHorizontal}}>
      <View style={{
        flex: 0.8,
        flexDirection:'row',      
        alignItems:'center',
        justifyContent:'flex-start'}}>
        <Image
          style={{
            width: Metrics.listItemIconSize,
            height: Metrics.listItemIconSize,
            borderRadius: Metrics.listItemIconSize/2}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <View style={{
          marginLeft: Metrics.listItemPaddingVertical2/2,
          paddingVertical: Metrics.listItemPaddingVertical1,
        }}>
          <Text style={{
            color: Colors.textPrimary,
            fontSize: Fonts.size.mini,
            lineHeight: Fonts.size.mini,
            backgroundColor: Colors.maskColor,
            }}>British Pound</Text>
        </View>
      </View>
      <View style={{
        flex: 0.2,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingVertical: Metrics.listItemPaddingVertical1,
      }}>
        <Text style={{
          color: Colors.brandPrimary,
          backgroundColor: Colors.maskColor,
          fontSize: Fonts.size.mini }}>GBP</Text>
      </View>
    </MKButton>
  )
};

export default ListItem2;
