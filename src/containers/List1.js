import React from 'react';
import { ListView } from 'react-native';
import ListItem1 from '../components/ListItem/ListItem1';

function List1(props){
  return (
    <ListView
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem1 itemData={rowData} borderBottom={true}/>}
      onScroll={props.onListScroll}
    />
  )
};

export default List1;
