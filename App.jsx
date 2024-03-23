import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Celular from './components/Celular';

export default function App() {
  return (
    <View style={styles.container}>
      <Celular celular1="81995119966" celular2="81995119966" celular3="81995119966"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
