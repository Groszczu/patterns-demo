import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    minWidth: '50%',
    height: '50%',
    maxHeight: 300,

    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Card;
