import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';

export default function After() {
  return (
    <View style={styles.container}>
      <Card title={1} />
      <Card title={2} />
      <Card title={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42c5f5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
