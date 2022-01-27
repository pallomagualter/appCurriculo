import React from 'react';
import { Text, View } from 'react-native';

import style from './style';

const Card = ({ titulo, children }) => {
    return (
        <View style={style.card_container}>
            <View style={style.card}>
                <View style={style.card_header}>
                    <Text>{titulo}</Text>
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