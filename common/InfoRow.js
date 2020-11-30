import React from 'react';
import { Text } from 'react-native';

const InfoRow = ({ name, value }) => {
  return <Text>{`${name.toUpperCase()}: ${value}`}</Text>;
};

export default InfoRow;
