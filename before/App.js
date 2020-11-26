import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

export default function Before() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>3</Text>
      </View>
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
