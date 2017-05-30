import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@theme/';

function Divider (props) {
  var sectionID = props.sectionID;
  var rowID = props.rowID;
  var highlight = props.adjacentRowHighlighted;
  return (  
    <View
      key={`${sectionID}-${rowID}`}
      style={{
        height: highlight ? 1.5 : 1,
        backgroundColor: highlight ? Colors.textPrimary : Colors.textSecondary,
      }}
    />
  );
};

export default Divider;
