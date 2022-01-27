import React from 'react';
import { StyleSheet, Image, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {

  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'github':
        Alert.alert('https://github.com/pallomagualter');
        break;
      case 'instagram':
        Alert.alert('https://www.instagram.com/pallomagualter/');
        break;
      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/palloma-gualter-983b7338/');
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
            <Icon name="github" size={30} />
            <Icon name="instagram" size={30} />
            <Icon name="linkedin" size={30} />
          </View>
        </View>
        <View style={styles.card_container}>
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_content_text}>Secretaria de Estado da Educação - SEDUC-PI</Text>
              <Text style={styles.card_content_text}>Adebaran Studio</Text>
              <Text style={styles.card_content_text}>Bem Brasil LTDA (Atuando na PRF-PI)</Text>
              <Text style={styles.card_content_text}>Agência de Tecnologia da Informação do Estado do Piauí</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text>Formação Acadêmica</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_content_text}>UNIVERSIDADE FEDERAL DO PIAUÍ - UFPI</Text>
              <Text style={styles.card_content_text}>Bacharelado em Ciência da Computação</Text>
            </View>
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
  rede_social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '80%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  card_content: {
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
