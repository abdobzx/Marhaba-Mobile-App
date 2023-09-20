import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import axios from 'axios';
import { lien, shadow, sizes } from './../components/theme';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [data, setData] = useState([]);
  const [favo, setFavo] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price} DH</Text>
        <Text style={styles.address}>{item.adresse}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => addF(item)}>
          <Icon name="heart" size={24} color="white" />
          <Text style={styles.buttonText}>Add To Favorit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:40
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'grey',
    fontStyle: 'italic',
  },
  address: {
    fontSize: 18,
    color: 'grey',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 18,
    margin: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#8fbc8f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 8,
  },
});

export default DetailScreen;
