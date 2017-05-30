import React from 'react';
import { View, Text, ListView } from 'react-native';
import { Fonts, Styles, Colors, Metrics } from '@theme/';

import ListItem1 from '../ListItem/ListItem1';

function Content (props) {
    
    return (
      <ListView
          dataSource={props.data}
          renderRow={(rowData) => <ListItem1 itemData={rowData} borderBottom={false} />}
        />
    );
  
};

export default Content;