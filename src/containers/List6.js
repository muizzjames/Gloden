import React from 'react';
import { ListView } from 'react-native';
import ListItem6 from '../components/ListItem/ListItem6';

function List6(props){
  return (  
    <ListView
      style={{marginTop: 22}}
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem6 itemData={rowData} borderBottom={true}/>}
    />
  )
};

export default List6;
