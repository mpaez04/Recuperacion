import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Context }  from '../Context/Context';

export default function dia() {
    const { apidia } = useContext(Context);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>dia</Text>
            {apidia.map((b) => <Text style={styles.letras}> Autor: {b.a} Frase: {b.q}</Text> ) }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A4F7F7',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    titulo :{
        fontSize:40,
    },
    letras:{
        fontSize:20,
    }
});