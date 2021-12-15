import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import aleatorio from '../Screens/aleatorio';
import varios from '../Screens/varios';
import dia from '../Screens/dia';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="dia"
            drawerStyle={{
                backgroundColor:'#ffff',
                width:'80%'
            }}
            drawerContentOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606"
            }}
        
        >
            <Drawer.Screen
                name="dia"
                component={dia}
                options={{
                    headerShown:false,
                    drawerLabel:"Frase del dia",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-sunny"} size={20} color={color}/>
                    )
                }}
            
            />

            <Drawer.Screen
                name="Varias"
                component={varios}
                options={{
                    headerShown:false,
                    drawerLabel:"Varias Frases",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-people"} size={20} color={color}/>
                    )
                }}
            />

            <Drawer.Screen
                name="Aleatorio"
                component={aleatorio}
                options={{
                    headerShown:false,
                    drawerLabel:"Frases aleatorias",
                    drawerIcon:({color})=>(
                        <Ionicons name={"md-shuffle"} size={20} color={color}/>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}