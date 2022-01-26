import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import foto from './assets/foto.jpg';

const App = () => {

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho} >
          <Image source={foto} style={styles.foto} />
          <Text style={styles.texto}> Olá, Palloma!</Text>
        </View>
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  texto: {
    marginTop: 20
  }
});

export default App;
