import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text} from 'react-native';



import Settings from './screens/Settings';
import Begin from './screens/Begin';



  const Stack= createNativeStackNavigator();
   
export default function Allset() {
  return (

   
   

   

    <Stack.Navigator>

         
          <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/> 
          
          
          
    </Stack.Navigator>

   
   
  );
};
