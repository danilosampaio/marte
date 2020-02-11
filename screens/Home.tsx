import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import ShareButton from '../components/ShareButton';

function Home() {
  return (
    <View style={styles.home}>
      <Card image={require('../assets/marte.png')}>
        <Text style={styles.cardTitle}>MARTE</Text>
        <Text style={styles.cardText}>
          Pode ficar tranquilo, eu postoro a casa.
        </Text>
        <ShareButton />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {flex: 1, justifyContent: 'center'},
  cardText: {marginBottom: 10},
  cardTitle: {fontWeight: 'bold'},
});

export default Home;
