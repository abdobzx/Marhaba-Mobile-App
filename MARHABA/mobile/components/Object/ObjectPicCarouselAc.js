import React, {useEffect, useState} from 'react';
import { FlatList, TouchableOpacity, View,StyleSheet,Image,Text } from 'react-native';
import ObjInfo from '../../screens/ObjInfo/ObjInfoMo';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { lien, shadow, sizes } from "../theme";
const Card_Width = sizes.width -230;
const Card_Height = 170;




const ObjectPicCarouselAc = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(lien.normal, { timeout: 20000 });
            setData(response.data);
            console.log(data);
          } catch (error) {
            console.error('Erreur lors du chargement des données :', error);
          }
        };
    
        fetchData();
      }, []);


    return (
       
        <FlatList data={data} horizontal keyExtractor={(item) => item.id.toString()} snapToInterval={200} showsHorizontalScrollIndicator={false} renderItem={({item}) => {
            if (item.categorie == 'activité'){
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9}  onPress={()=>{navigation.navigate('City')}}>
                    <View style={[styles.Card,shadow.light]}   >
                        <View style={styles.ImageBox}>
                            <Image source={{ uri: item.image }} style={styles.Image}  />
                        </View>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
            }
        }}>

        </FlatList>
       
        
    );
}

const styles = StyleSheet.create({

    Card: {
        width: Card_Width,
        height: Card_Height,
        backgroundColor:'white',
        borderRadius:7
        
    },
    ImageBox:{
        width: Card_Width,
        height: Card_Height,
        overflow: 'hidden',
        borderRadius:7

    },
    Image: {
        
        
        width: Card_Width,
        height: Card_Height,
        resizeMode : 'cover',
    },
    titleBox:{
        flex:1,
        position:'absolute',
        alignSelf:'center',
        top:Card_Height/2.3,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },

})

export default ObjectPicCarouselAc;




