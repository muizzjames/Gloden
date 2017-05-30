import React from 'react';
import { ListView } from 'react-native';
import ListItem5 from '../components/ListItem/ListItem5';

function List5(props){
  return (  
    <ListView
      style={{marginTop: 22}}
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem5 itemData={rowData} borderBottom={true}/>}
    />
  )
};

export default List5;
