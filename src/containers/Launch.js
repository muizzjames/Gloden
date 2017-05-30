import React from 'react';
import { View, Text } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";
import { Fonts, Styles } from '@theme/';

class Launch extends React.Component {

  render(){
    return (
      <View style={[Styles.screen.mainContainer, Styles.center]}>
        <Text style={{ color: 'red', fontFamily: Fonts.type.bold }}>Launch Lists</Text>
        <Button onPress={Actions.wallet}>Wallet</Button>
        <Button onPress={Actions.detailAccount}>Account Detailed View</Button>
        <Button onPress={Actions.detailView}>Detailed View</Button>
        <Button onPress={Actions.gatehub}>Gatehub USD</Button>
        <Button onPress={Actions.messaging}>Messaging</Button>
        <Button onPress={Actions.reviewSend}>Review and Send</Button>
        <Button onPress={Actions.activities}>Activities</Button>
      </View>
    );
  }
}

module.exports = Launch;
