import React,{useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../Context/Context';

export default function QuotesSreen() {
    const { apivarios } = useContext(Context);
    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.titulo}>varios</Text>
            {apivarios.map((b) => <Text> Autor: {b.q}. Frase: {b.q}</Text>)}
        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A4F7C1',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 35,
    },
    titulo :{
        fontSize:40,
    }
    
});
  