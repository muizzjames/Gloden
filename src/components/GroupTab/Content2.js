import React from 'react';
import { View, Text, ListView } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';

import ListItem1 from '../ListItem/ListItem1';
import Accordion from '@library/Collapse';
import GroupTabItem1 from './GroupTabItem1';

function Content2 (props) {
    return (
        <ListView
          dataSource={props.data}
          renderRow={(rowData) => <GroupTabItem1 rowData={rowData}/>}
        />
    );
  
};

export default Content2;