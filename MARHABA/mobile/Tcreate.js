import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Image, View, StyleSheet, Text, SafeAreaView, RefreshControl, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { lien, shadow, sizes } from './components/theme';
import { useTranslation } from 'react-i18next';

const { width: WindowWidth } = Dimensions.get('window');
const Card_Width = WindowWidth - 20;
const Card_Height = 230;

const Infos = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [favo, setFavo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(lien.favoris, { timeout: 20000 });
      setData(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des données :', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);

    try {
      const response = await axios.get(lien.favoris, { timeout: 20000 });
      setData(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des données :', error);
    } finally {
      setRefreshing(false);
    }
  };

  const addF = (item) => { 
    axios
      .post(lien.creat, {
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



      })
      .catch((error) => {
        console.error('Error saving item:', error);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity activeOpacity={0.9}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.location}>
          <Entypo name="location-pin" size={20} color="#8fbc8f" />
          <Text style={{ marginLeft: 5 }}>{item.adresse}</Text>
        </View>
        <View style={styles.price}>
          <Entypo name="price-tag" size={20} color="#8fbc8f" />
          <Text style={{ marginLeft: 5 }}>{item.price}DH</Text>
        </View>
        <TouchableOpacity
          style={styles.addFavoButton}
          onPress={() => addF(item)}
        >
          <Entypo name="plus" size={20} color="black" />
          <Text style={styles.addFavoButtonText}>{t("Add")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Trips');
          }}
        >
          <Image
            source={require('./assets/fleche.png')}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t("Trips")}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('./assets/menu.png')}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
  data={data}
  keyExtractor={(item, index) => index.toString()}
  snapToInterval={200}
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
  }
  renderItem={renderItem}
/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EEEE',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardContainer: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    width: Card_Width,
    height: Card_Height,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addFavoButton: {
    backgroundColor: '#8fbc8f',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addFavoButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default Infos;