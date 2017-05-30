import React from 'react';
import { ListView } from 'react-native';
import ListItem3 from '../components/ListItem/ListItem3';

function List3(props){
  return (  
    <ListView
      style={{marginTop: 22}}
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem3 itemData={rowData} borderBottom={true}/>}
    />
  )
};

export default List3;
