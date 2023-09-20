import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { firebase } from '../config';
import { useTranslation } from 'react-i18next';



export default function Sign () {

  const {t} = useTranslation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  registerUser = async (email, password, firstName, lastName) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url:'mobile-a5c98.firebaseapp.com',
      })
      .then(() => {
        alert('Verification email sent')
      }).catch((error) => {
        alert(error.message)
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    })
    .catch((error => {
      alert(error.message)
    }))
  }


const handleLogin = () => {};
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/marhab.jpg')}
        style={styles.backgroundImage}>
      
       <TouchableOpacity
            onPress={()=>{navigation.navigate('Begin')}}
            activeOpacity={0.5}>
              <Image source={require("../assets/fleche.png")} style={styles.buttonImage} />
          </TouchableOpacity>
        <View style={styles.TxTContainer}>
          <Text style={{fontSize: 30,fontWeight: 'bold',color: "white",marginTop:-40}}>{t("Create-acc")}</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={{fontWeight: 600,fontSize: 18,marginBottom:15,color: 'white'}}>{t("Create-account")}</Text>
          <View style={styles.card}>
            <TextInput
              placeholder={t("First-name")}
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              autoCorrect={false}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder={t("Last-name")}
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              autoCorrect={false}
            />
          </View>

          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder={t("psw")}
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              autoCorrect={false}
              autoCapitalize='none'
            />
          </View>
          <Text style={{color: 'white' ,fontSize:16,}}>{t("condition1")}
          <Text style={{color: `#8fbc8f` , fontWeight : 'bold' , fontSize : 16 , marginLeft:4,}}  >
          {t("condition2")}</Text>
          </Text>
          <TouchableOpacity style={styles.Button} onPress={() => registerUser(email, password, firstName, lastName)} >
            <Text style={styles.ButtonText}>{t("AgreeContinue")}</Text>
          </TouchableOpacity>
        </View>
       
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  TxTContainer: {
    alignItems: 'center',
    marginTop: 160,
    paddingTop: 50,
  },
  formContainer: {
    marginHorizontal: 30,
    marginTop: 32,
    padding:20,
    borderRadius:10,
    backgroundColor:'rgba(173, 162, 162 , 0.3)',

  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
    width:"90%",
    left:'5%'
     
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#B0C4DE',
    color:"black",
    fontSize:16,
  },
  Button: {
    backgroundColor: '#8fbc8f',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    
  },
  ButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center'
    


  },

   buttonImage: {
      padding: 10,
      marginLeft:10,
      marginTop:2,
      height: 50,
      width: 50,
      position: 'absolute',
      top:20,
      
  
    
    },
});