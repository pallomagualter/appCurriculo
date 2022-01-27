import React from 'react';
import { Text, View } from 'react-native';

import style from './style';

const Card = (props) => {
    return (
        <View style={style.card_container}>
            <View style={style.card}>
                <View style={style.card_header}>
                    <Text>Experiência Profissional</Text>
                </View>
                <View style={style.card_content}>
                    <Text style={style.card_content_text}>Secretaria de Estado da Educação - SEDUC-PI</Text>
                    <Text style={style.card_content_text}>Adebaran Studio</Text>
                    <Text style={style.card_content_text}>Bem Brasil LTDA (Atuando na PRF-PI)</Text>
                    <Text style={style.card_content_text}>Agência de Tecnologia da Informação do Estado do Piauí</Text>
                </View>
            </View>

            <View style={style.card}>
                <View style={style.card_header}>
                    <Text>Formação Acadêmica</Text>
                </View>
                <View style={style.card_content}>
                    <Text style={style.card_content_text}>UNIVERSIDADE FEDERAL DO PIAUÍ - UFPI</Text>
                    <Text style={style.card_content_text}>Bacharelado em Ciência da Computação</Text>
                </View>
            </View>
        </View>
    );
}

export default Card;