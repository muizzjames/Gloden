import React from 'react';
import { ListView } from 'react-native';
import ListItem8 from '../components/ListItem/ListItem8';

function List8(props){  
  return (  
    <ListView
        style={{marginTop: 22}}
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem8 itemData={rowData}/>}
    />
  )
};

export default List8;
