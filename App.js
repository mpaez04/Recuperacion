import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator1 from './Navigations/DrawerNavigator1';
import ContextProvider from './Context/Context';

export default function App() {
  return (
    <ContextProvider>
        <NavigationContainer>
          <DrawerNavigator1/>
      </NavigationContainer>
    </ContextProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
