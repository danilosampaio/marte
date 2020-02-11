import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FBLoginButton from '../components/FBLoginButton';
import UserProfileData from '../types/UserProfileData';

const Login = ({route}) => {
  const {setUserProfile, setToken} = route.params;
  const setUserInfo = (data: UserProfileData, token: string) => {
    setUserProfile(data);
    setToken(token);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.topArea} />
      <View style={styles.logoArea}>
        <Image
          source={require('../assets/astronaut.png')}
          style={styles.logo}
        />
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
    backgroundColor: '#23546A',
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
    color: '#ffffff',
    paddingTop: 10,
  },
  facebookButton: {
    flex: 3,
    paddingLeft: 15,
    paddingRight: 15,
  },
  logo: {width: 200, height: 200},
});

export default Login;
