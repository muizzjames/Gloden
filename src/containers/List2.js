import React from 'react';
import { ListView } from 'react-native';
import ListItem2 from '../components/ListItem/ListItem2';

function List2(props){
  return (  
    <ListView
      style={{marginTop: 22}}
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem2 itemData={rowData} borderBottom={true}/>}
    />
  )
};

export default List2;
