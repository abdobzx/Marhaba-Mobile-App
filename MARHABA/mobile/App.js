

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text} from 'react-native';

import Header from './components/Header';
import ObjectPicCarousel from './components/ObjectPicCarousel';
import { HOTELS, TOP_PLACES } from './data/index';
import Authn from './Authn';
import Swipe from './components/Swipe';
import Recherche from './components/Recherche';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import  Settings  from './screens/Settings';
import Allset from './Allset';

import City from './screens/City';
import Allhome from './Allhome';


  const Stack= createNativeStackNavigator();
   
export default function App() {
  return (

 
     
    // <Navbar/>
    //  <Home/>  

  //  <Settings/>
  // <City/>


    
    
        // <ObjInfo list={HOTELS}/>
      
  <NavigationContainer>
    <Authn/>
  </NavigationContainer>
     
   
    //  <View>
    //     <ObjectPicCarousel list={TOP_PLACES}/>
    //   </View>
    // <Header/>
     

   
  );
};



