import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FBLoginButton from '../components/FBLoginButton';
import UserProfileData from '../types/UserProfileData';

const Login = ({navigation}) => {
  const setUserInfo = (data: UserProfileData) => {
    navigation.navigate('Main', {
      userProfile: data,
    });
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.topArea} />
      <View style={styles.logoArea}>
        <Icon name="grav" size={150} color="#A01C08" />
        <Text style={styles.logoTitle}>Marte</Text>
      </View>
      <View style={styles.facebookButton}>
        <FBLoginButton onResponse={setUserInfo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  topArea: {
    flex: 3,
  },
  logoArea: {
    flex: 5,
    alignItems: 'center',
  },
  logoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#A01C08',
  },
  facebookButton: {
    flex: 3,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Login;
