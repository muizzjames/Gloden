import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
import { MKButton } from 'react-native-material-kit';

function ListItem3 (props) {
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
        flex: 1,
        flexDirection:'row',      
        alignItems:'center',
        justifyContent:'flex-start'}}>
        <View>
          <Image
            style={{
              width: Metrics.listItemIconSize,
              height: Metrics.listItemIconSize,
              borderRadius: Metrics.listItemIconSize/2}}
            source={{uri: props.itemData.item1 }}
          />
          <Image
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: props.itemData.item3 === true ? Metrics.listItemIconSize / 2.5 : 0,
              height: props.itemData.item3 === true ? Metrics.listItemIconSize/ 2.5 : 0,
              borderRadius: Metrics.listItemIconSize / 5}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
        </View>
        
        <View style={{
          marginLeft: Metrics.listItemPaddingVertical2/2,
          paddingVertical: Metrics.listItemPaddingVertical1,
        }}>
          <Text style={{
            color: Colors.textPrimary,
            fontSize: Fonts.size.mini,
            lineHeight: Fonts.size.mini,
            backgroundColor: Colors.maskColor,
            }}>{ props.itemData.item2 }</Text>
        </View>
      </View>      
    </MKButton>
  )
};

export default ListItem3;
