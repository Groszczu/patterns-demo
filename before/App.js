import React from 'react';
import { StyleSheet, View } from 'react-native';
import InfoRow from '../common/InfoRow';
import { UserService } from '../services';

export default function Before() {
  const { firstName, lastName, age } = UserService.getUsers().find(
    (user) => user.id === 1
  );

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
