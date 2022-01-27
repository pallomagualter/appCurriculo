import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>PALLOMA GUALTER</Text>
          <Text style={styles.funcao}> Desenvolvedora Mobile</Text>
          <View style={styles.redes_sociais}>
            <Icon name="github" size={30} />
            <Icon name="instagram" size={30} />
            <Icon name="linkedin" size={30} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 26,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});

export default App;
