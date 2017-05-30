import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
import { MKButton, MKRadioButton } from 'react-native-material-kit';

function ListItem7 (props) {
  return (  
    <View
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
        justifyContent:'flex-start',
        paddingVertical: Metrics.listItemPaddingVertical1,
      }}>
        <Text style={{
          color: Colors.textPrimary,
          fontSize: Fonts.size.mini,
          lineHeight: Fonts.size.mini,
          backgroundColor: Colors.maskColor,
          }}> { props.itemData.name }</Text>
      </View>
      <View style={{
        flex: 0.2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingVertical: Metrics.listItemPaddingVertical1,
      }}>
        <MKRadioButton checked={ props.itemData.select } group={props.group}/>
      </View>
    </View>
  )
};

export default ListItem7;
