import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';

import GroupTabItem1 from '../components/GroupTab/GroupTabItem1';
import GroupTabItem2 from '../components/GroupTab/GroupTabItem2';

function GroupTab(props){
  
  return (
      <View style={{marginTop: 22, flexDirection:'column'}}>
        <Text style={{ backgroundColor: 'grey', padding: 10}}>Group Tab1</Text>
        <ListView
          dataSource={props.dataSource1}
          renderRow={(rowData) => <GroupTabItem1 rowData={rowData}/>}
        />
        <Text style={{ backgroundColor: 'grey', padding: 10}}>Group Tab2</Text>
        <ListView
          dataSource={props.dataSource2}
          renderRow={(rowData) => <GroupTabItem2 rowData={rowData}/>}
        />
      </View>
    );
};

export default GroupTab;