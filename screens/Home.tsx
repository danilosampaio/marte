import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

function Home() {
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

const styles = StyleSheet.create({
  home: {flex: 1, justifyContent: 'center'},
  cardText: {marginBottom: 10},
  cardButton: {borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0},
});

export default Home;
