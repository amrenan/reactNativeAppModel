import { View, Text } from 'react-native';
import React from 'react';

const Celular = (props) => {
  return (
    <View style={styles.container}>
      <Text>Celular 1: {props.celular1}</Text>
      <Text>Celular 2: {props.celular2}</Text>
      <Text>Celular 3: {props.celular3}</Text>
    </View>
  );
}

export default Celular