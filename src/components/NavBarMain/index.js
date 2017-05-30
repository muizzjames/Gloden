import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js';

function NavBarMain(props) {
  const subView = (
    <View style={styles.subView}>
      <StatusBar backgroundColor={Colors.brandPrimary}/>
      <TouchableOpacity
        onPress={props.onLeftBtnPress}
        style={[Styles.center, { width: 20}]}
      >
        {props.leftIcon ? <Icon style={styles.iconStyle} name={props.leftIcon}/> : null}
      </TouchableOpacity>
      <View>
        <Text style={styles.centerText}>{props.title}</Text>
      </View>
      <TouchableOpacity
        onPress={props.onRightBtnPress}
        style={[Styles.center, { width: 20}]}
      >
        {props.rightIcon ? <Icon style={styles.iconStyle} name={props.rightIcon}/> : null}
      </TouchableOpacity>
    </View>
  );
  const mainView = props.image ?
    (<Image style={[styles.container, props.style, { resizeMode: 'stretch' }]} source={props.image}>
      {subView}
    </Image>)
    :
    (<View style={[styles.container, props.style]}>
      {subView}
    </View>);
  return (
    <View>
      {mainView}
    </View>
  );
}
export default NavBarMain;
