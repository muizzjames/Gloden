import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Metrics, Images, Styles, Colors, Fonts } from '@theme/';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
const chartWidth = Metrics.screenWidth - (Metrics.listItemMarginHorizontal * 3);
const monthChar = [{id: 0, val: 'J'}, {id: 1, val: 'F'}, {id: 2, val: 'M'},
                    {id: 3, val: 'A'}, {id: 4, val: 'M'}, {id: 5, val: 'J'},
                    {id: 6, val: 'J'}, {id: 7, val: 'A'}, {id: 8, val: 'S'},
                    {id: 9, val: 'O'}, {id: 10, val: 'N'}, {id: 11, val: 'D'}];
function NavBarGatehub2(props) {
  let graphVal = "";
  let point = [];
  monthChar.map(function(item){
    point[item.id] = (Math.random() + 1) * 40;
    graphVal += (item.id * chartWidth/props.month).toString() + "," + point[item.id].toString() + " ";
  });
  return (
    <View style={styles.container}>
      <Svg height="100" width={ chartWidth }>
        {
          monthChar.map(function(item){
            return(
              <Line key={item.id}
                x1={item.id * chartWidth/props.month} y1="10"
                x2={item.id * chartWidth/props.month} y2="90" stroke="white" strokeWidth="1"/>
            );
          })
        }
        <Polyline
          points={graphVal}
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        {
          monthChar.map(function(item){
            return(
              <Circle key={item.id}
                cx={item.id * chartWidth/props.month}
                cy={point[item.id]}
                r='3'
                fill='white'/>
            );
          })
        }
      </Svg>
      <View style={styles.monthText}>
        {
          monthChar.map(function(item){
            return(
              <Text key={item.id} style={{ color: 'white' }}>
                {item.val}
              </Text>
            );
          })
        }
      </View>
    </View>
  );
}
export default NavBarGatehub2;
