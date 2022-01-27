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
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>PALLOMA GUALTER</Text>
          <Text style={style.funcao}> Desenvolvedora Mobile</Text>
          <View style={style.rede_social}>
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

        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>UNIVERSIDADE FEDERAL DO PIAUÍ - UFPI</Text>
          <Text style={style.card_content_text}>Bacharelado em Ciência da Computação</Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={style.card_content_text}>Secretaria de Estado da Educação - SEDUC-PI</Text>
          <Text style={style.card_content_text}>Adebaran Studio</Text>
          <Text style={style.card_content_text}>Bem Brasil LTDA (Atuando na PRF-PI)</Text>
          <Text style={style.card_content_text}>Agência de Tecnologia da Informação do Estado do Piauí</Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
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
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
