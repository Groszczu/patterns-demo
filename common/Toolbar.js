import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Toolbar = ({ title }) => {
  return (
    <View style={styles.toolbar}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Toolbar;
