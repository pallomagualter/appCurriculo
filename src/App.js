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
          <Text style={styles.textoNome}>PALLOMA GUALTER</Text>
          <Text style={styles.texto}> Desenvolvedora Mobile</Text>
          <View>
            <Text>Github</Text>
            <Text>Instagram</Text>
            <Text>LinkedIn</Text>
          </View>
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
  textoNome: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default App;
