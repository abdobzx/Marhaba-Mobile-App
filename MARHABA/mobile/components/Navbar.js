import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

// Screens

import Map from '../Map'
import Trip from '../Trip'

import Allset from '../Allset';
import Allhome from '../Allhome';
import Trips from '../realTrip';

//Screen names
const homeName = "Home";
const mapName = "Map";
const settingsName = "Settings";
const favoritesName = "Trips";

const Tab = createBottomTabNavigator();


export default function Navbar() {
  return (
 

     
    
   
      <Tab.Navigator
        
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === mapName) {
              iconName = focused ? 'map' : 'map-outline';

            } 
             else if (rn === favoritesName) {
              iconName = focused ? 'duplicate' : 'duplicate-outline';
            }
            else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
           

            // You can return any component that you like here!
            return <Ionicons  name={iconName} size={size} color={color}  />;
           
          },
        })}
        tabBarOptions={{
            
          activeTintColor: "#8fbc8f",
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 11, },
          style: { padding: 10, height: 70 ,},
          
        }}>

        <Tab.Screen name={homeName} component={Allhome} options={{headerShown:false}} />
        <Tab.Screen name={mapName} component={Map} options={{headerShown:false}} />
        <Tab.Screen name={favoritesName} component={Trips}  options={{headerShown:false}}/>
        <Tab.Screen name={settingsName} component={Allset}  options={{headerShown:false}}/>
      
         
        

      </Tab.Navigator>
    
  );
}