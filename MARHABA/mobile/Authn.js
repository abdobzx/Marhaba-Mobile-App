
import React, {useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './config';
import Sign from "./screens/Sign";
import Begin from "./screens/Begin";
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();

export default function Authn() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
   if (initializing) return null;

   if(!user){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Begin" component={Begin} options={{headerShown:false}}/>
        <Stack.Screen name="Sign" component={Sign} options={{headerShown:false}}/>

      </Stack.Navigator>
    );
   }

   return(
    <Stack.Navigator>
       <Stack.Screen name="Navbar" component={Navbar} options={{headerShown:false}}/>
    </Stack.Navigator>
   );
};
