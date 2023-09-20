import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'

export default function Recherche() {
    const [search, setSearch] = useState()
    return(
      <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.inputs}
            placeholder="Choose your city"
            keyboardType="search"
            underlineColorAndroid="transparent"
            onChangeText={search => setSearch({ search })}
            />
            <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}>
            <Image source={require("../assets/recherche.png")}style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:"4%",
      
      
    },
    inputContainer: {
      backgroundColor: '#8fbc8f',
      borderRadius: 30,
      width: 300,
      height: 54,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
  


  
      elevation: 5,
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1,
      fontSize:18,
      
    },
    inputIcon: {
      width: 30,
      height: 30,
      marginRight: 15,
      justifyContent: 'center',
    },
    button: {
        height: 30,
        margin: 10,
        width:35,
      },
      buttonImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
      
      },
})