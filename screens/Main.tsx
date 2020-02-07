import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Card, Button} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.home}>
      <Card title="Marte" image={require('../assets/marte.png')}>
        <Text style={styles.cardText}>
          Pode ficar tranquilo, eu postoro a casa.
        </Text>
        <Button buttonStyle={styles.cardButton} title="Click me" />
      </Card>
    </View>
  );
}

function SettingsScreen({route}) {
  const {userProfile} = route.params;

  return (
    <View style={styles.settings}>
      <Avatar
        rounded
        source={{
          uri: userProfile.picture.data.url,
        }}
      />
      <Text>{userProfile.name}</Text>
      <Text>{userProfile.email}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Main = ({route}) => {
  const {userProfile} = route.params;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'sliders-h' : 'sliders-h';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{userProfile}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  home: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  settings: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  cardText: {marginBottom: 10},
  cardButton: {borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0},
});

export default Main;
