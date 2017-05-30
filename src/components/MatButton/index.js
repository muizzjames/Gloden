import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { Styles } from '@theme/';

function MatButton(props){
  return (
    <TouchableOpacity
      style={[Styles.center, styles.button, props.style]}
      onPress={props.onPress}>
      <Text pointerEvents="none" style={[styles.textStyle, props.textStyle]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
export default MatButton;
