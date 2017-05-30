import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts, Styles, Colors, Metrics, Images } from '@theme/';
import { MKButton } from 'react-native-material-kit';

function ListItem4 (props) {

  var tintColor = "";
  var stateImage = "";

  switch(props.itemData.item5)
  {
    case 1:
      tintColor = Colors.textSecondary;
      stateImage = Images.imgMessagingConfirmation1;
      break;
    case 2:
      tintColor = Colors.textSecondary;
      stateImage = Images.imgMessagingConfirmation2;
      break;
    case 3:
      tintColor = Colors.brandPrimary;
      stateImage = Images.imgMessagingConfirmation2;
      break;
    default:
      tintColor = Colors.textSecondary;
      stateImage = Images.imgMessagingConfirmation1;
      break;
  }
  

  return (  
    <MKButton
      maskColor={Colors.maskColor}
      rippleColor={Colors.rippleColor}
      style={{
        flex: 1,
        flexDirection:'row',
        height: Metrics.listItemHeight,
        borderBottomWidth: props.borderBottom === true ? 1 : 0,
        borderColor: Colors.dividerPrimary,
        marginHorizontal: Metrics.listItemMarginHorizontal}}>
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
          source={{uri: props.itemData.item1 }}
        />
        <View style={{
          flex: 1,
          flexDirection:'column',
          marginLeft: Metrics.listItemPaddingVertical2/2,
          paddingVertical: Metrics.listItemPaddingVertical2,
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
              }}>{ props.itemData.item2 }</Text>
            <Text style={{
              flex: 0.33,
              color: Colors.textSecondary,
              textAlign:'right',
              fontSize: Fonts.size.mini,
              backgroundColor: Colors.maskColor,
              lineHeight: Fonts.size.mini, }}>{ props.itemData.item3 }</Text>
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
              }}>{ props.itemData.item4 }</Text>
            <Image
              style={{
                resizeMode:"center",
                width: Fonts.size.mini * 2,
                height: Fonts.size.mini,
                tintColor: tintColor
              }}
              source={ stateImage }
            />
          </View>
        </View>
      </View>      
    </MKButton>
  )
};

export default ListItem4;
