import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho} >
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>PALLOMA GUALTER</Text>
          <Text style={styles.funcao}> Desenvolvedora Mobile</Text>
          <View>
            <Icon name="github" />
            <Text style={styles.social}>Instagram</Text>
            <Text style={styles.social}>LinkedIn</Text>
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
  nome: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 26,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  social: {

  }
});

export default App;
