import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';
import { MKButton } from 'react-native-material-kit';

function ListItem8 (props) {
  console.log(props);
  return (
    <MKButton
      maskColor={Colors.maskColor}
      rippleColor={Colors.rippleColor}
        style={{
        flex: 1,
        flexDirection:'column',
        marginHorizontal: Metrics.listItemMarginHorizontal,
      }}>
        <View style={{
          flex:1,
          paddingBottom: Metrics.listItemMarginHorizontal/2 }}>
          <Text style={{
            color: Colors.brandPrimary,
            fontSize: Fonts.size.mini }}>{props.itemData.item1}</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection:'row',      
          alignItems:'center',
          justifyContent:'flex-start',
          paddingBottom: Metrics.listItemMarginHorizontal/2}}>
          <Image
            style={{
              width: Metrics.listItemIconSize,
              height: Metrics.listItemIconSize,
              borderRadius: Metrics.listItemIconSize/2}}
            source={{uri: props.itemData.item2 }}
          />
          <View style={{
            flex: 1,
            flexDirection:'column',
            marginLeft: Metrics.listItemPaddingVertical2/2,
          }}>
            <View style={{
              flexDirection: 'row',
              marginBottom: Fonts.size.mini,}}>
              <Text style={{
                flex: 0.67,
                color: Colors.textPrimary,
                fontSize: Fonts.size.mini,
                lineHeight: Fonts.size.mini
                }}>{props.itemData.item3}</Text>
              <Text style={{
                flex: 0.33,
                color: Colors.brandPrimary,
                textAlign:'right',
                fontSize: Fonts.size.mini,
                lineHeight: Fonts.size.mini, }}>{props.itemData.item4}</Text>
            </View>
            <View style={{
              flexDirection:'row' }}>
              <Text style={{
                flex: 0.67,
                marginRight: Fonts.size.mini * 2,
                color: Colors.textSecondary,
                fontSize: Fonts.size.mini,
                lineHeight: Fonts.size.mini,
                }}>{props.itemData.item5}</Text>
              <Text style={{
                flex: 0.33,
                color: Colors.textSecondary,
                textAlign:'right',
                fontSize: Fonts.size.mini,
                lineHeight: Fonts.size.mini, }}>{props.itemData.item6}</Text>
            </View>
          </View>
        </View>   
        <View style={{
          flex: 1,
          flexDirection:'row',      
          alignItems:'center',
          justifyContent:'flex-start'}}>
          <Image
            style={{
              width: Metrics.listItemIconSize,
              height: Metrics.listItemIconSize,
              borderRadius: Metrics.listItemIconSize/2}}
            source={{uri: props.itemData.item7 }}
          />
          <View style={{
            flex: 1,
            flexDirection:'column',
            marginLeft: Metrics.listItemPaddingVertical2/2,
          }}>
            <View style={{
              flexDirection: 'row',
              marginBottom: Fonts.size.mini,}}>
              <Text style={{
                flex: 0.67,
                color: Colors.textPrimary,
                fontSize: Fonts.size.mini,
                lineHeight: Fonts.size.mini,
                backgroundColor: Colors.maskColor,
                }}>{props.itemData.item8}</Text>
              <Text style={{
                flex: 0.33,
                color: Colors.textFourth,
                textAlign:'right',
                fontSize: Fonts.size.mini,
                backgroundColor: Colors.maskColor,
                lineHeight: Fonts.size.mini, }}>{props.itemData.item9}</Text>
            </View>
            <View style={{
              flexDirection:'row' }}>
              <Text style={{
                flex: 1,
                marginRight: Fonts.size.mini * 2,
                color: Colors.textSecondary,
                fontSize: Fonts.size.mini,
                lineHeight: Fonts.size.mini,
                backgroundColor: Colors.maskColor,
                }}>{props.itemData.item10}</Text>
              <Text style={{
                flex: 0.33,
                color: Colors.textSecondary,
                textAlign:'right',
                fontSize: Fonts.size.mini,
                backgroundColor: Colors.maskColor,
                lineHeight: Fonts.size.mini, }}>{props.itemData.item11}</Text>
            </View>
          </View>
        </View>      
        <View style={{
          flex:1,
          marginTop: Metrics.listItemMarginHorizontal/2,
          paddingBottom: Metrics.listItemMarginHorizontal*2,
          borderColor:Colors.textSecondary,
          borderTopWidth: 1,
        }}>
          <Text style={{
            color: Colors.textSecondary,
            backgroundColor: Colors.maskColor,
            fontSize: Fonts.size.mini }}>{props.itemData.item12}</Text>
        </View>
    </MKButton>
  )
};

export default ListItem8;
