import React from 'react';
import { View, Text, ListView } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';

import Header from './Header';
import Content2 from './Content2';
import Accordion from '@library/Collapse';

function GroupTabItem2(props) {    
    return (
      <Accordion
        style={{ backgroundColor: Colors.tabItemColor, }}
        underlayColor={ Colors.tabItemColor }
        header={
          <View style={{ backgroundColor: Colors.tabItemColor, }}>
            <Header data={props.rowData}/>
          </View>
        }
        content={<View><Content2 data={props.rowData.sub}/></View>}
        bottomWidth={2}
        easing="easeOutCubic"
        animationDuration={600}
      />
    );
  
};

export default GroupTabItem2;