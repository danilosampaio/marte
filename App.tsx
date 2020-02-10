import React from 'react';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Main from './screens/Main';
import UserProfileData from './types/UserProfileData';
import {AccessToken} from 'react-native-fbsdk';

const Stack = createStackNavigator();

const App = () => {
  const [userProfile, setUserProfile] = React.useState<UserProfileData>();
  const [token, setToken] = React.useState<AccessToken>();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!token || !userProfile? (
          <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{userProfile, setUserProfile, token, setToken}}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={Main}
            initialParams={{userProfile, setUserProfile, token, setToken}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
