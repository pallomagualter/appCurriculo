import React from 'react';
import { StyleSheet, Image, Text, View, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';
import Card from './components/Card';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/pallomagualter');
        break;
      case 'instagram':
        Alert.alert('Meu Instagram', 'https://www.instagram.com/pallomagualter/');
        break;
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://www.linkedin.com/in/palloma-gualter-983b7338/');
        break;
    }
  }

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>PALLOMA GUALTER</Text>
          <Text style={styles.funcao}> Desenvolvedora Mobile</Text>
          <View style={styles.rede_social}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Icon name="instagram" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Acadêmica" />
        <Card titulo="Experiência Profissional" />
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
  rede_social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});

export default App;
