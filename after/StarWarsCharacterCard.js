import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoRow from '../common/InfoRow';

const StarWarsCharacterCard = ({ character }) => {
  const { name, gender, birth_year, hair_color } = character;

  return (
    <View style={styles.container}>
      <InfoRow name={'name'} value={name} />
      <InfoRow name={'hair color'} value={hair_color} />
      <InfoRow name={'gender'} value={gender} />
      <InfoRow name={'birth year'} value={birth_year} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    width: '100%',
  },
});

export default StarWarsCharacterCard;
