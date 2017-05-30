import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Platform } from 'react-native';
import { Scene, Reducer, Router, Modal, Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Launch from './containers/Launch';
import Wallet from './containers/Wallet';
import AccountDetailView from './containers/AccountDetailView';
import DetailView from './containers/DetailView';
import Gatehub from './containers/Gatehub';
import Messaging from './containers/Messaging';
import GroupTab from './containers/GroupTabContainer';
import ReviewSend from './containers/ReviewSend';
import Activities from './containers/Activities';
import { MKRadioButton } from 'react-native-material-kit';
import * as Animatable from 'react-native-animatable';
import { Styles } from '@theme/';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

let offset = 0;
let headerSeg = 3;
const mySlideOutDown = {
  from: { height: 30 },
  to: { height: 0, }
}
const mySlideInUp = {
  from: { height: 0 },
  to: { height: 30 }
}
class Gloden extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource1: ds.cloneWithRows([
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Global iD Points Arc5 (G)...",
          item3: "P 1,000",
          item4: "10.00 USD"
        }
      ]),
      dataSource2: ds.cloneWithRows([
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "British Pound",
          item3: "GBP"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "United State",
          item3: "USD"
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Malaysia",
          item3: "MYR"
        }
      ]),
      dataSource3: ds.cloneWithRows([
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "British Pound",
          item3: true
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "United State",
          item3: false
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Malaysia",
          item3: false
        }
      ]),
      dataSource4: ds.cloneWithRows([
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Elizabeth Rodriguez",
          item3: "Yesterday",
          item4: "In a professional context it often hap...",
          item5: 1
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Elizabeth Rodriguez",
          item3: "Yesterday",
          item4: "In a professional context it often hap...",
          item5: 2
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Elizabeth Rodriguez",
          item3: "Yesterday",
          item4: "In a professional context it often hap...",
          item5: 3
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Elizabeth Rodriguez",
          item3: "Yesterday",
          item4: "In a professional context it often hap...",
          item5: 1
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Elizabeth Rodriguez",
          item3: "Yesterday",
          item4: "In a professional context it often hap...",
          item5: 2
        },
        {
          item1: "https://facebook.github.io/react/img/logo_og.png",
          item2: "Elizabeth Rodriguez",
          item3: "Yesterday",
          item4: "In a professional context it often hap...",
          item5: 3
        }
      ]),
      dataSource5: ds.cloneWithRows([
        {
          item1: "Attention Number 34 containing...",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "Attention Aux10tix",
          item4: "10:22 hours",
          item5: true
        },
        {
          item1: "Attention Number 34 containing...",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "Attention Aux10tix",
          item4: "10:22 hours",
          item5: true
        },
        {
          item1: "Attention Number 34 containing...",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "Attention Aux10tix",
          item4: "10:22 hours",
          item5: true
        },
        {
          item1: "Attention Number 34 containing...",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "Attention Aux10tix",
          item4: "10:22 hours",
          item5: true
        },
        {
          item1: "Attention Number 34 containing...",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "Attention Aux10tix",
          item4: "10:22 hours",
          item5: false
        },
        {
          item1: "Attention Number 34 containing...",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "Attention Aux10tix",
          item4: "10:22 hours",
          item5: true
        }
      ]),
      dataSource6: ds.cloneWithRows([
        {
          item1: "Title1",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "10:22 hours",
          item4: true
        },
        {
          item1: "Title2",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "10:22 hours",
          item4: true
        },
        {
          item1: "Title3",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "10:22 hours",
          item4: false
        },
        {
          item1: "Title4",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "10:22 hours",
          item4: true
        },
        {
          item1: "Title5",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "10:22 hours",
          item4: false
        },
        {
          item1: "Title6",
          item2: "Your Id Card has been attresd to as valid. Your Card has been riidjkka Your Id Card has been attresd to as valid. Your Card has been riidjkka",
          item3: "10:22 hours",
          item4: true
        }
      ]),
      dataSource7: ds.cloneWithRows([
        { name: 'John', select: true },
        { name: 'Joel', select: false },
        { name: 'James', select: false },
        { name: 'Jimmy', select: false },
        { name: 'Jackson', select: false },
        { name: 'Jillian', select: false}
      ]),
      dataSource8: ds.cloneWithRows([
        {
          item1: "TODAY",
          item2: "https://facebook.github.io/react/img/logo_og.png",
          item3:'Mitja Simsic',
          item4: "+ 1,00.00 USD",
          item5: "Mitja Simcic",
          item6: "FEB 22 2017",
          item7: "https://facebook.github.io/react/img/logo_og.png",
          item8: "Sydicate Liquidty",
          item9: "-50",
          item10: "Gate Hub",
          item11: "FEB 22 2017",
          item12: "FEBRUARY 2017"
        },
        {
          item1: "TODAY",
          item2: "https://facebook.github.io/react/img/logo_og.png",
          item3:'Mitja Simsic',
          item4: "+ 1,00.00 USD",
          item5: "Mitja Simcic",
          item6: "FEB 22 2017",
          item7: "https://facebook.github.io/react/img/logo_og.png",
          item8: "Sydicate Liquidty",
          item9: "-50",
          item10: "Gate Hub",
          item11: "FEB 22 2017",
          item12: "FEBRUARY 2017"
        }
      ]),
      dataSource9: ds.cloneWithRows([
        {
          item1: 'BTC(BTC)',
          item2: '10.00 BTC',
          sub: ds.cloneWithRows([
            {
              item1: "https://facebook.github.io/react/img/logo_og.png",
              item2: "Global iD Points Arc5 (G)...",
              item3: "P 1,000",
              item4: "10.00 BTC"
            },
            {
              item1: "https://facebook.github.io/react/img/logo_og.png",
              item2: "Global iD Points Arc5 (G)...",
              item3: "P 1,000",
              item4: "10.00 USD"
            },
            {
              item1: "https://facebook.github.io/react/img/logo_og.png",
              item2: "Global iD Points Arc5 (G)...",
              item3: "P 1,000",
              item4: "10.00 USD"
            }
          ])
        },
        {
          item1: 'USD(USD)',
          item2: '10.00 USD',
          sub: ds.cloneWithRows([
            {
              item1: "https://facebook.github.io/react/img/logo_og.png",
              item2: "Global iD Points Arc5 (G)...",
              item3: "P 1,000",
              item4: "10.00 USD"
            },
            {
              item1: "https://facebook.github.io/react/img/logo_og.png",
              item2: "Global iD Points Arc5 (G)...",
              item3: "P 1,000",
              item4: "10.00 USD"
            },
            {
              item1: "https://facebook.github.io/react/img/logo_og.png",
              item2: "Global iD Points Arc5 (G)...",
              item3: "P 1,000",
              item4: "10.00 USD"
            },
            {
              item1: "https://facebook.github.io/react/img/logo_og.png",
              item2: "Global iD Points Arc5 (G)...",
              item3: "P 1,000",
              item4: "10.00 USD"
            }
          ])
        }
      ]),
      dataSource10: ds.cloneWithRows([
        {
          item1: 'BTC(BTC)',
          item2: '10.00 BTC',
          sub: ds.cloneWithRows([
            {
              item1: "RIPPLE WALLET",
              item2: true,
              sub: ds.cloneWithRows([
                {
                  item1: "https://facebook.github.io/react/img/logo_og.png",
                  item2: "Global iD Points Arc5 (G)...",
                  item3: "P 1,000",
                  item4: "10.00 BTC"
                },
                {
                  item1: "https://facebook.github.io/react/img/logo_og.png",
                  item2: "Global iD Points Arc5 (G)...",
                  item3: "P 1,000",
                  item4: "10.00 USD"
                },
                {
                  item1: "https://facebook.github.io/react/img/logo_og.png",
                  item2: "Global iD Points Arc5 (G)...",
                  item3: "P 1,000",
                  item4: "10.00 USD"
                }
              ])
            },
            {
              item1: "RIPPLE WALLET",
              item2: true,
              sub: ds.cloneWithRows([
                {
                  item1: "https://facebook.github.io/react/img/logo_og.png",
                  item2: "Global iD Points Arc5 (G)...",
                  item3: "P 1,000",
                  item4: "10.00 BTC"
                },
                {
                  item1: "https://facebook.github.io/react/img/logo_og.png",
                  item2: "Global iD Points Arc5 (G)...",
                  item3: "P 1,000",
                  item4: "10.00 USD"
                },
                {
                  item1: "https://facebook.github.io/react/img/logo_og.png",
                  item2: "Global iD Points Arc5 (G)...",
                  item3: "P 1,000",
                  item4: "10.00 USD"
                }
              ])
            }
          ])
        }
      ]),
    };
    this.radioGroup = new MKRadioButton.Group();
  }
  componentWillMount() {
    Animatable.initializeRegistryWithDefinitions({
      mySlideInUp: mySlideInUp,
      mySlideOutDown: mySlideOutDown
    });
  }
  onListScroll(event) {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const maxOffset = event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height;

    if(currentOffset < 0 || maxOffset <= currentOffset) return;

    // if(Math.abs(offset - currentOffset) >  )
    const delta = Math.abs(offset - currentOffset);

    if( offset < currentOffset && delta > 35){
      if(headerSeg > 0)
      {
        headerSeg--;
      }

      Actions.refresh({animationBtn: 'mySlideOutDown', animation: 'slideOutDown',scrollPos: 'down', headerActive: headerSeg });
      offset = currentOffset;
    }
    if( offset > currentOffset && delta > 35 ) {
      if(headerSeg < 3){
        headerSeg++;
      }

      Actions.refresh({animationBtn: 'mySlideInUp', animation: 'slideInUp', scrollPos: 'up', headerActive: headerSeg });
      offset = currentOffset;
    }
  }

  render() {
    return (
      <Router createReducer={reducerCreate} style = {Styles.screen.mainContainer}>
        <Scene key="launch" component={Launch} title="ListItems" initial hideNavBar/>
        <Scene key="wallet"
          component={Wallet}
          title="Wallet"
          dataSource={this.state.dataSource1}
          onListScroll={this.onListScroll}
        />
        <Scene key="detailAccount" component={AccountDetailView} title="AccountDetailView"/>
        <Scene key="detailView" component={DetailView} title="DetailView"/>
        <Scene key="gatehub"
          component={Gatehub}
          title="Gatehub"
          dataSource={this.state.dataSource1}
          onListScroll={this.onListScroll}
        />
        <Scene key="messaging" component={Messaging} title="Messaging"/>
        <Scene key="reviewSend" component={ReviewSend} title="ReviewSend"/>
        <Scene key="activities" component={Activities} title="Activities"/>
      </Router>
    );
  }
}

export default Gloden;
