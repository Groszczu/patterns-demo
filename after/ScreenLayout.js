import React from 'react';
import { StyleSheet, View } from 'react-native';
import Toolbar from '../common/Toolbar';

const ScreenLayout = ({ headerTitle, children }) => {
  return (
    <View style={styles.container}>
      <Toolbar title={headerTitle} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#42c5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenLayout;
