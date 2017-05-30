import React from 'react';
import { ListView } from 'react-native';
import ListItem7 from '../components/ListItem/ListItem7';
import { MKRadioButton } from 'react-native-material-kit';

function List7(props){
  
  return (  
    <ListView
      style={{marginTop: 22}}
      dataSource={props.dataSource}
      renderRow={(rowData) => <ListItem7 itemData={rowData} borderBottom={true} group={props.group}/>}
    />
  )
};

export default List7;
