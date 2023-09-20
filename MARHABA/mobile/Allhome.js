import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text} from 'react-native';

import Home from './screens/Home';
import ObjInfo from './screens/ObjInfo/ObjInfoMo';
import ObjectPicCarousel from './components/ObjectPicCarousel';
import City from './screens/City'
import { HOTELS } from './data';
import ObjInfoAc from './screens/ObjInfo/ObjInfoAc';
import ObjInfoMO from './screens/ObjInfo/ObjInfoMo';
import ObjInfoRe from './screens/ObjInfo/ObjInfoRe';
import ObjInfoLo from './screens/ObjInfo/ObjInfoLo';
import ObjInfoMa from './screens/ObjInfo/ObjInfoMa';
import ObjInfoPr from './screens/ObjInfo/ObjInfoPr';
import ObjInfos from './Trip';
import Infos from './Tcreate';
import Obj from './Yourtrip';
import Trips from './realTrip';
import Ome from './screens/Settings';
import DetailScreen from './screens/DetailScreen';





  const Stack= createNativeStackNavigator();
   
export default function Allhome() {
  return (

   
       

 
     
    <Stack.Navigator>

         
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/> 
          <Stack.Screen name='City' component={City} options={{headerShown:false}}/>
          <Stack.Screen name='ObjectPicCarousel' component={ObjectPicCarousel} options={{headerShown:false}}/>
          <Stack.Screen name='ObjInfoAc' component={ObjInfoAc} options={{headerShown:false}}/>
          <Stack.Screen name='ObjInfoMo' component={ObjInfoMO} options={{headerShown:false}}/>
          <Stack.Screen name='ObjInfoRe' component={ObjInfoRe} options={{headerShown:false}}/>
          <Stack.Screen name='ObjInfoLo' component={ObjInfoLo} options={{headerShown:false}}/>
          <Stack.Screen name='ObjInfoMa' component={ObjInfoMa} options={{headerShown:false}}/>
          <Stack.Screen name='ObjInfoPr' component={ObjInfoPr} options={{headerShown:false}}/>
          <Stack.Screen name='Trip' component={ObjInfos} options={{headerShown:false}}/>
          <Stack.Screen name='Infos' component={Infos} options={{headerShown:false}}/>
          <Stack.Screen name='Obj' component={Obj} options={{headerShown:false}}/>
          <Stack.Screen name='Trips' component={Trips} options={{headerShown:false}}/>
          <Stack.Screen name='Ome' component={Ome} options={{headerShown:false}}/>
          <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown:false}} />
          
          
          

    </Stack.Navigator>
    
   

    

   

  
   
  );
};