import React from 'react';
import { View, Text, StyleSheet, ListView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavBarMain from '@components/NavBarMain';
import HomeTabBar from '@components/HomeTabBar';
import CircleButton from '@components/CircleButton';
import ProfileAvatar from '@components/ProfileAvatar';
import MatButton from '@components/MatButton';
import { Fonts, Styles, Colors, Images, Metrics } from '@theme/';
import Icon from 'react-native-vector-icons/Ionicons';
const MK = require('react-native-material-kit');
import styles from './styles';

const { MKButton } = MK;
function ReviewSend(props) {
  const ColoredFab = MKButton
                      .coloredFab()
                      .withBackgroundColor('white')
                      .withStyle(styles.fab)
                      .withOnPress(() => {
                        alert('hi, raised button!');
                       })
                      .build();
  return(
      <View style={[Styles.screen.mainContainer]}>
        <NavBarMain
          title='Review and send'
          leftIcon='chevron-left'
          onLeftBtnPress={()=> Actions.pop()}
        />
        <View style={[Styles.center, styles.avatarView]}>
          <ProfileAvatar
            style={Styles.buttonCircle}
            radius={120}
            text={'Mitja Simcic'}
            avatar='https://facebook.github.io/react/img/logo_og.png'/>
          <View style={Styles.center}>
            <Text style={styles.textTitle}>Amount to send</Text>
            <Text style={styles.textPrice}>23,00 EUR</Text>
          </View>
        </View>
        <View style={styles.feeView}>
          <Text style={styles.textTitle}>Fee</Text>
          <Text style={[styles.textTitle, { color: Colors.brandPrimary }]}>1,00 EUR</Text>
        </View>
        <View style={styles.feeView}>
          <View style={[Styles.center, { flexDirection: 'row'}]}>
            <ColoredFab>
              <Image pointerEvents="none" style={{ tintColor: Colors.textSecondary }} source={Images.imgPlus} />
            </ColoredFab>
            <Text style={[styles.textTitle, { marginLeft: 10, color: Colors.textPrimary }]}>
              Add note
            </Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconStyle}/>
        </View>
        <View style={styles.feeView}>
          <View style={[Styles.center, { flexDirection: 'row'}]}>
            <Text style={[styles.textTitle, { color: Colors.textSecondary }]}>
              Sending from
            </Text>
            <Text style={[styles.textTitle, { color: Colors.textPrimary, marginLeft: 10 }]}>
              Master Card (6483)
            </Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconStyle}/>
        </View>
        <TouchableOpacity
          style={[styles.buttonStyle, Styles.center]}
          onPress={() => alert('Send')}>
          <Text style={styles.buttonText}>SEND</Text>
          <Icon style={styles.buttonIcon} name='ios-arrow-forward'/>
        </TouchableOpacity>
        <HomeTabBar
          onTabPress={(tab) => alert(tab)}
          messagingBadge={13}
          activitiesBadge={3}
          walletBadge={1}
          msgBadge={3}
        />
        <CircleButton
          style={Styles.buttonCircle}
          radius={80}
          onPress={()=> alert('Profile')}
          avatar='https://facebook.github.io/react/img/logo_og.png'/>
      </View>
  )
};

export default ReviewSend;
