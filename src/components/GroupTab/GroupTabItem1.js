import React from 'react';
import { View, Text, ListView } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';

import Header from './Header';
import Content1 from './Content1';
import Accordion from '@library/Collapse';

function GroupTabItem1 (props) {
    return (
      <Accordion
        style={{ backgroundColor: Colors.tabItemColor, }}
        underlayColor={ Colors.tabItemColor }
        header={<View style={{ backgroundColor: Colors.tabItemColor, }}><Header data={props.rowData}/></View>}
        content={<View><Content1 data={props.rowData.sub}/></View>}
        bottomWidth={2}
        easing="easeOutCubic"
        animationDuration={600}
      />
    );
  
};

export default GroupTabItem1;