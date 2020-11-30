import React from 'react';
import { StyleSheet, View } from 'react-native';
import InfoRow from '../common/InfoRow';
import connect from './connect';

function Before({ user }) {
  const { firstName, lastName, age } = user;

  return (
    <View style={styles.container}>
      <InfoRow name={'name'} value={`${firstName} ${lastName}`} />
      <InfoRow name={'age'} value={age} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#42c5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const connectState = (state) => ({
  user: state.find((u) => u.id === 1),
});

export default connect(connectState)(Before);
