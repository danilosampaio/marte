import React from 'react';
import {Share, Alert, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';

const ShareButton = () => {
  const onShare = async () => {
    try {
      await Share.share({
        message: 'https://github.com/danilosampaio/marte',
      });
    } catch (error) {
      Alert.alert(error.message, error.toString());
    }
  };

  return (
    <Button
      buttonStyle={styles.cardButton}
      onPress={onShare}
      title="Compartilhar "
      icon={<Icon name="share" size={15} color="white" />}
      iconRight
    />
  );
};

const styles = StyleSheet.create({
  cardButton: {borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0},
});

export default ShareButton;
