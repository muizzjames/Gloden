import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Styles, Fonts, Colors, Images } from '@theme/';
import { View } from 'react-native-animatable';

function CircleButton(props){
  return (
    <View animation={props.animation} duration={600}
      style={[Styles.center, styles.container, props.style, { width: props.radius }]}>
    <TouchableOpacity
      style={[Styles.center, styles.container, { width: props.radius }]}
      onPress={props.onPress}
    >
      <Image
        source={Images.imgProfileOutline}
        style={[Styles.center, { resizeMode: 'stretch', width: props.radius * 0.9, height: props.radius * 0.9 }]}>
        <Image
          source={Images.imgProfileTrustCricle}
          style={[Styles.center, { resizeMode: 'stretch', width: props.radius * 0.8, height: props.radius * 0.8 }]}>
          <View
            style={[Styles.center, styles.centerView, { borderRadius: (props.radius * 0.68) / 2, width: props.radius * 0.68, height: props.radius * 0.68 }]}>
            <Image
              style={{ resizeMode: 'cover', width: props.radius * 0.6, height: props.radius * 0.6, borderRadius: props.radius * 0.3 }}
              source={{uri: props.avatar}}/>
          </View>
        </Image>
      </Image>
    </TouchableOpacity>
    </View>
  );
}
export default CircleButton;
