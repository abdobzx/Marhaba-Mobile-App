import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Image, View, StyleSheet, Text, SafeAreaView, RefreshControl, Dimensions } from 'react-native'; // Import Dimensions here
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { lien, shadow, sizes } from './components/theme';
import { useTranslation } from 'react-i18next';

const { width: WindowWidth } = Dimensions.get('window'); 

const Card_Width = WindowWidth - 20;
const Card_Height = 230;


const ObjInfos = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const {t} = useTranslation();

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

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://192.168.11.101:3001/delete/${id}`);
      setData((prevData) => prevData.filter((val) => val.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
    }
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
          style={styles.deleteButton}
          onPress={() => deleteItem(item.id)}
        >
          <Entypo name="trash" size={20} color="black" />
          <Text style={styles.deleteButtonText}>{t("Delete")}</Text>
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
            navigation.navigate('Home');
          }}
        >
          <Image
            source={require('./assets/fleche.png')}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t("Favoris")}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('./assets/menu.png')}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
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
  deleteButton: {
    backgroundColor: '#8fbc8f',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop:10
  },
  deleteButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default ObjInfos;