import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Olá, Palloma!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
