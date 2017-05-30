import React from 'react';
import { ListView } from 'react-native';
import ListItem4 from '../components/ListItem/ListItem4';

function List4(props){
  return (  
    <ListView
      style={{marginTop: 22}}
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem4 itemData={rowData} borderBottom={true}/>}
    />
  )
};

export default List4;
