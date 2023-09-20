import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Image, View, StyleSheet, Text, Button, SafeAreaView ,RefreshControl } from 'react-native';
import { lien, shadow, sizes } from '../../components/theme';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { Alert } from 'react-native';

const Card_Width = sizes.width - 20; 
const Card_Height = 250; 

const ObjInfoAc = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [favo, setFavo] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(lien.normal, { timeout: 20000 });
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);

    try {
      const response = await axios.get(lien.normal, { timeout: 20000 });
      setData(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des données :', error);
    } finally {
      setRefreshing(false);
    }
  };

  const addF = (item) => { 
    axios
      .post(lien.create, {
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
        categorie: item.categorie,
        ville: item.ville,
        adresse: item.adresse,
      })
      .then(() => {
        setFavo([
          ...favo,
          {
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
            categorie: item.categorie,
            ville: item.ville,
            adresse: item.adresse,
          },
        ]);


        Alert.alert('Success', 'Your product has been added to the favorites page');
      })
      .catch((error) => {
        console.error('Error saving item:', error);
      });
  };

  return (
    <>
      <View>
        <View>
          <View style={styles.view}>
            <TouchableOpacity
              style={styles.headerbutton1}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('City');
              }}
            >
              <Image source={require('../../assets/fleche.png')} style={styles.headerbuttonImage1} />
            </TouchableOpacity>
            <View style={styles.headertxt}>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>ACTIVITES</Text>
            </View>
            <TouchableOpacity
              style={styles.headerbutton}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('Trip');
              }}
            >
              <Image source={require('../../assets/heart.png')} style={styles.headerbuttonImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={Card_Height + 20} 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={({ item }) => {
          if (item.categorie == 'activité') {
            return (
              <View style={styles.cardContainer}>
                {/* Image */}
                <TouchableOpacity
                  style={styles.imageContainer}
                  activeOpacity={0.9}
                  onPress={() => {
                    navigation.navigate('Detail', { item });
                  }}
                >
                  <Image source={{ uri: item.image }} style={styles.image} />
                </TouchableOpacity>

                {/* Info */}
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.infoRow}>
                    <Entypo name="price-tag" size={24} color="#8fbc8f" />
                    <Text style={styles.price}>{item.price}DH</Text>
                  </View>

                  <View style={styles.infoRow}>
                    <Entypo name="location-pin" size={26} color="#8fbc8f" />
                    <Text style={styles.address}>{item.adresse}</Text>
                  </View>
                 

                  {/* Save Button */}
                  <TouchableOpacity
                    style={styles.saveButton}
                    activeOpacity={0.9}
                    onPress={() => addF(item)}
                  >
                    <View style={styles.saveButtonInner}>
                      <Text style={styles.saveButtonText}>Save</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F0EEEE',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: Card_Width * 0.4,
    height: Card_Height,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop:15
  },
  price: {
    fontSize: 18,
    color: 'grey',
    fontStyle: 'italic',
    marginLeft: 7,
  },
  address: {
    fontSize: 18,
    color: 'grey',
    fontStyle: 'italic',
    marginLeft: 7,
    
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#8fbc8f',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  saveButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',

    
  },
  mapIcon: {
    marginRight: 10,
  },
  saveButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  view: {
    marginTop: 5,
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  headertxt: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
    marginTop: 2,
  },
  headerbutton1: {
    height: 40,
    margin: 5,
    width: 40,
    alignItems: 'flex-start',
  },
  headerbutton: {
    height: 40,
    margin: 5,
    width: 40,
    alignItems: 'flex-end',
  },
  headerbuttonImage: {
    padding: 10,
    marginTop:3,
    marginRight:10,
    height: 35,
    width: 35,
  },
  headerbuttonImage1: {
    padding: 10,
    marginTop:2,
    marginLeft:8,
    height: 40,
    width: 35,
  },



})

export default ObjInfoAc;
