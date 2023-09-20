
import React, { startTransition } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import { NavigationContainer,useNavigation } from '@react-navigation/native';
 
export  default function Header() {
 const navigation = useNavigation();

  return (
    <View>
         
         <View style={styles.view}>
          <TouchableOpacity
            style={styles.button1}
            activeOpacity={0.5}
            >
            <Image source={require("../assets/profile.png")} style={styles.buttonImage1}/>
        
          </TouchableOpacity>
          <View style={styles.txt}>
            <Text style={{fontWeight:"bold",fontSize:25}}>MARHABA</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => { navigation.navigate('Trip') }}>
              <Image source={require("../assets/heart.png")} style={styles.buttonImage}/>
          </TouchableOpacity>
        </View>
   
    </View>
   
  );
};


const styles = StyleSheet.create({

view: {
      
      marginTop: 5,
      paddingTop: 40,
      paddingBottom:10,
      flexDirection: 'row',

    },
    txt: {
      justifyContent:'center',
      alignItems: "center",  
      flex:1,
      textAlign:'center',
      marginTop:2,

    },
    button1: {
        height: 40,
        margin: 5,
        width:40,
        alignItems:'flex-start'
      },
  
    button: {
      height: 40,
      margin: 5,
      width:40,
      alignItems:'flex-end'
    },
    buttonImage: {
      padding: 10,
      marginTop:3,
      marginRight:10,
      height: 35,
      width: 35,
    },
    buttonImage1: {
      padding: 10,
      marginTop:-8,
      marginLeft:8,
      height: 53,
      width: 53,
    },

});