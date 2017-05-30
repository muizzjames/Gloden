import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
import { MKButton } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons';

function ListItem6 (props) {
  return (  
    <MKButton
      maskColor={Colors.maskColor}
      rippleColor={Colors.rippleColor}
      style={{
        flex: 1,
        flexDirection:'column',
        borderBottomWidth: props.borderBottom === true ? 1 : 0,
        borderColor: Colors.dividerPrimary,
        marginHorizontal: Metrics.listItemMarginHorizontal,
        paddingVertical: Metrics.listItemPaddingVertical2,
      }}>
      <View style={{
        flexDirection: 'row',
        marginBottom: Metrics.listItemMarginHorizontal/2
      }}>
        <Text style={{
          color: Colors.textPrimary,
          fontSize: Fonts.size.mini,
          backgroundColor: Colors.maskColor,
          flex: 1, }}>{ props.itemData.item1 }</Text>
        <View style={{ width: props.itemData.item4 === true ? Fonts.size.mini : 0}}>
          <Icon size={ Fonts.size.mini } name='ios-arrow-forward' color={Colors.textSecondary}/>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent:'flex-end',
      }}>
        <Text style={{
          color: Colors.textSecondary,
          fontSize: Fonts.size.mini,
          flex: 0.67, }}>{ props.itemData.item2 }</Text>
        <Text style={{
          color: Colors.brandPrimary,
          fontSize: Fonts.size.mini,
          textAlign: 'right',
          backgroundColor: Colors.maskColor,
          flex: 0.33 }}>{ props.itemData.item3 }</Text>
      </View>
    </MKButton>
  )
};

export default ListItem6;
