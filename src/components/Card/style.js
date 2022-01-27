import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
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
    card_header_text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    card_content: {
        marginTop: 20,
    },
});

export default style;