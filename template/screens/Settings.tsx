import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';

function Settings({route}) {
  const {userProfile, setToken} = route.params;

  const list = [
    {
      title: 'Histório',
      icon: 'refresh',
    },
    {
      title: 'Editar',
      icon: 'edit',
    },
  ];

  return (
    <View style={styles.settings}>
      <Avatar
        rounded
        source={{
          uri: userProfile.picture.data.url,
        }}
        size="large"
      />
      <Text>{userProfile.name}</Text>
      <Text>{userProfile.email}</Text>
      <View style={styles.list}>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{name: item.icon}}
            bottomDivider
            chevron
          />
        ))}
        <ListItem
          title="Sair"
          leftIcon={{name: 'close'}}
          bottomDivider
          chevron
          onPress={() => setToken(null)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {paddingTop: 20, minWidth: 300},
});

export default Settings;
