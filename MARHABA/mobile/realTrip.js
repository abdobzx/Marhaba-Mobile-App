import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Trips = () => {
  const {t} = useTranslation();

    const navigation = useNavigation();
  const handleCreateTrip = () => {
    console.log('Create your trip button pressed!');
  };

  return (

    <>
      <View>
         
         <View style={styles.view}>
          
          <View style={styles.headertxt}>
            <Text style={{fontWeight:"bold",fontSize:25,left:"6%"}}>{t("Trips")}</Text>
          </View>
          <TouchableOpacity
            style={styles.headerbutton}
            activeOpacity={0.5}>
              <Image source={require("./assets/menu.png")} style={styles.headerbuttonImage}/>
          </TouchableOpacity>
        </View>
   
      </View>

    <ScrollView style={styles.container}>
     

      {/* "Create your trip" button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('Infos') }} style={styles.button}>
          <Text style={styles.buttonText}>{t("Createtrip")}</Text>
        </TouchableOpacity>
      </View>

      {/* Square with text */}

      <View style={styles.blueBox}>
  <Text
    style={styles.centeredText}
    onPress={() => { navigation.navigate('Obj') }}>
    {t("Trip-title")}
  </Text>
</View>

      
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  blueBox: {
    backgroundColor: '#8fbc8f', 
    borderRadius: 8, 
    paddingHorizontal: 16, 
    paddingVertical: 30, 
    marginHorizontal: 15,
    alignItems: 'center',
    marginTop: 60,
  },
  centeredText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', 
 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center', 
    marginTop: 40, 
  },
  button: {
    backgroundColor: '#8fbc8f',
    borderRadius: 18, 
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  squareContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    marginTop: 60,
  },
  square: {
    width: 129, 
    height: 126, 
    backgroundColor: '#8fbc8f',
    marginLeft: 14, 
    marginRight: 20, 
    borderRadius: 8, 
  },
  squareText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginTop: 30,
    marginLeft:14,
  
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db'
  },
  bigSquareContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  bigSquare: {
    width: 300,
    height: 126,
    backgroundColor: '#8fbc8f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  bigSquareText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

 view: {
      
      marginTop: 5,
      paddingTop: 35,
      paddingBottom:10,
      flexDirection: 'row',

    },
    headertxt: {
      justifyContent:'center',
      alignItems: "center",  
      flex:1,
      textAlign:'center',
      marginTop:2,

    },
   
  
    headerbutton: {
      height: 40,
      margin: 5,
      width:40,
      alignItems:'flex-end'
    },
    headerbuttonImage: {
      padding: 10,
      marginTop:3,
      marginRight:10,
      height: 35,
      width: 35,
    },
});

export default Trips;