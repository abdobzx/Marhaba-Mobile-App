
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, ScrollView,Switch, Modal, FlatList} from 'react-native';
import React, { useState, useEffect }from 'react';
import { firebase } from '../config';
import i18next, {languageResources} from '../services/i18next';
import { useTranslation } from 'react-i18next';
import languagesList from '../services/languagesList.json'






  
   
export default function Ome() {

   const navigation = useNavigation();

  const [isEnabled_loc, setIsEnabled_loc] = useState(false);
  const toggleSwitch_loc = () => setIsEnabled_loc(previousState => !previousState);
  const [isEnabled_notify, setIsEnabled_notify] = useState(false);
  const toggleSwitch_notify = () => setIsEnabled_notify(previousState => !previousState);

  const[name, setName] = useState('')

  // translation code
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };
  // end
  useEffect(() => {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log('User does not exist')
      }
    })
  })


    
  return (
    
    
    
      < >
     
            <View>
         
         <View style={styles.view}>
          
          <View style={styles.headertxt}>
            <Text style={{fontWeight:"bold",fontSize:25,left:"6%"}}>{t("Settings")}</Text>
          </View>
          <TouchableOpacity
            style={styles.headerbutton}
            activeOpacity={0.5}>
              <Image source={require("../assets/menu.png")} style={styles.headerbuttonImage}/>
          </TouchableOpacity>
        </View>
   
    </View>
      
          <ScrollView style={{backgroundColor:"#F0EEEE" ,flex:1,}}>
           
              <TouchableOpacity
            style={styles.button2}
            activeOpacity={0.5}>
            <Image source={require("../assets/profile.png")} style={styles.buttonImage1}/>
             <Text style={{fontWeight: "bold",fontSize: 20,marginBottom:15,}}>{name.firstName} {name.lastName}</Text>
             <Text style={{fontWeight: 600,fontSize: 15,marginBottom:15,marginTop:-15,}}>{name.email}</Text>
          </TouchableOpacity>
            
            
            
            <View style={{  top: "7%",width:"100%" , flex:1, }}>
            <Text style={{fontWeight: 600,fontSize: 18,marginBottom:15,marginTop:5,marginLeft:10,color:"#928C8A"}}>PREFERENCES</Text>

            {/* LANGUAGE */}
            <Modal visible={visible} onRequestClose={()=> setVisible(false)}>
              <View style={styles.languagesList}>
              <FlatList
                data={Object.keys(languageResources)}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => changeLng(item)}>
                    <Text style={styles.lngName}>
                      {languagesList[item].nativeName}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              </View>
            </Modal>
            <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=> setVisible(true)}>
                <Image source={require("../assets/language.png")} style={styles.icon}/>
                <Text style={{fontWeight: 600,fontSize: 18,marginTop:5,marginLeft:10,alignItems:'center' }}>{t("change-language")}</Text>
                 <Text style={{position:'relative', color:"#D3CFCE",fontSize:17,width:"100%",textAlign:'center',top:4}}>{t("langue")}</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.container} activeOpacity={0.5}>
                <Image source={require("../assets/localis.png")} style={styles.icon}/>
                <Text style={{fontWeight: 600,fontSize: 18,marginTop:5,marginLeft:10,alignItems:'center' }}>{t("Localisation")}</Text>
                <View style={{flex:1,alignItems:'flex-end',right:10}}>
               <Switch trackColor={{false: '#DDDDDD', true: '#1FCF2F'}} thumbColor={isEnabled_loc ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#DDDDDD" onValueChange={toggleSwitch_loc} value={isEnabled_loc}/>
               </View>
               
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} activeOpacity={0.5}>
                <Image source={require("../assets/notification.png")} style={styles.icon}/>
                <Text style={{fontWeight: 600,fontSize: 18,marginTop:5,marginLeft:10,alignItems:'center' }}>{t("Notification")}</Text>
                <View style={{flex:1,alignItems:'flex-end',right:10}}>
               <Switch trackColor={{false: '#DDDDDD', true: '#1FCF2F'}} thumbColor={isEnabled_notify ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#DDDDDD" onValueChange={toggleSwitch_notify} value={isEnabled_notify}/>
               </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} activeOpacity={0.5}>
                <Image source={require("../assets/supprimer.png")} style={styles.icon}/>
                <Text style={{fontWeight: 600,fontSize: 18,marginTop:5,marginLeft:10,alignItems:'center' }}>{t("Fermer-compte")}</Text>
            </TouchableOpacity>

            </View>  
            <View style={{  top: "12%",width:"100%",flex:1,}} >
            <Text style={{fontWeight: 600,fontSize: 18,marginBottom:15,marginTop:5,marginLeft:10,color:"#928C8A"}}>{t("Help")}</Text>
            <TouchableOpacity style={styles.container} activeOpacity={0.5}>
                <Image source={require("../assets/help.png")} style={styles.icon}/>
                <Text style={{fontWeight: 600,fontSize: 18,marginTop:5,marginLeft:10,alignItems:'center' }}>{t("Assistance")}</Text>
                 
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} activeOpacity={0.5}>
                <Image source={require("../assets/contact.png")} style={styles.icon}/>
                <Text style={{fontWeight: 600,fontSize: 18,marginTop:5,marginLeft:10,alignItems:'center' }}>{t("Contact-us")}</Text>
           
           </TouchableOpacity>

           </View>

        
          <View style={{flex:1 ,marginBottom: "60%",top:20}}>
           <TouchableOpacity style={styles.Button} activeOpacity={0.5}  onPress={()=> firebase.auth().signOut()}>
            <Text style={styles.ButtonText}>{t("Se-deco")}</Text>
            </TouchableOpacity>
            </View>

          </ScrollView>
          
          
     </>
   
   
  );
};



const styles = StyleSheet.create({

     button2: {
       
       
        width:"100%",
        display:'flex',
        alignItems:'center',
        top:7,

      },

buttonImage1: {
      padding: 45,
      height: 45,
      width: 65,


},

languageButton: {
  padding: 10,
  borderBottomColor: '#dddddd',
  borderBottomWidth: 1,
},

languagesList: {
  flex: 1,
  justifyContent: 'center',
  padding: 100,
  backgroundColor:"black",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height:1},
    shadowOpacity: 0.11,
},

container:{
        
        padding:10,
        width:"100%",
       
    alignItems:'flex-start',
    flexDirection:'row',
    backgroundColor:"#F3F3F3",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height:1},
    shadowOpacity: 0.11,
    
    marginTop:0.2

},

lngName: {
  fontSize: 16,
  color: 'white',
  alignSelf:'center',
},

container1:{
    top:20 ,   
    padding:10,
    width:"100%",
    bottom:19, 
    alignItems:'flex-start',
    flexDirection:'row',
    backgroundColor:"#F3F3F3",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.1,
   

},
icon:{
    padding:10,
    height:30,
    width:30,
    marginLeft:5,

   
},
 Button: {
    backgroundColor: '#8fbc8f',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    top:"260%",
    marginLeft: 40,
    marginRight: 40,
    
 

  },
  ButtonText: {
    color: '#fff',
    fontSize: 20,
  },

 view: {
      
      marginTop: 5,
      paddingTop: 30,
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