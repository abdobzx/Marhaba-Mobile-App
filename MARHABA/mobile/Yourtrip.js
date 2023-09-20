import React, { useEffect, useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { lien } from './components/theme';
import { useTranslation } from 'react-i18next';


const Card_Width = 370;
const Card_Height = 230;

const Obj = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(lien.favori, { timeout: 20000 });
        console.log(response.data);
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
      const response = await axios.get(lien.favori, { timeout: 20000 });
      setData(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des données :', error);
    } finally {
      setRefreshing(false);
    }
  };

  const deleteF = async (id) => {
    console.log('bouton pressé');
    try {
      await axios.delete(`http://192.168.11.101:3001/delet/${id}`);
      setData((prevData) => prevData.filter((val) => val.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={() => {
        /* Ajoutez ici la navigation vers les détails de l'élément */
      }}
    >
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.ville}>{item.ville}</Text>

          <View style={styles.priceInfo}>
            <Entypo name="price-tag" size={24} color="#8fbc8f" />
            <Text style={styles.price}>{item.price}DH</Text>
          </View>

          <View style={styles.adresseInfo}>
            <Entypo name="location-pin" size={26} color="#8fbc8f" />
            <Text style={styles.adresse}>{item.adresse}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              deleteF(item.id);
            }}
          >
            <View style={styles.deleteButton}>
              <Entypo name="trash" size={24} color="white" />
              <Text style={styles.deleteButtonText}>{t("Delete")}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Trips');
          }}
        >
          <Image source={require('./assets/fleche.png')} style={styles.headerButtonImage} />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>{t("Trip-title")}</Text>
        </View>
        <TouchableOpacity
          style={styles.headerButton}
          activeOpacity={0.5}
        >
          <Image source={require('./assets/menu.png')} style={styles.headerButtonImage} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={Card_Height + 20}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
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
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  headerButton: {
    height: 40,
    margin: 5,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonImage: {
    height: 35,
    width: 35,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  flatListContent: {
    padding: 10,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    width: Card_Width,
    height: Card_Height,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ville: {
    fontSize: 18,
    color: 'grey',
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    marginLeft: 10,
    color: 'grey',
    fontStyle: 'italic',
  },
  adresseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  adresse: {
    fontSize: 18,
    marginLeft: 10,
    color: 'grey',
    fontStyle: 'italic',
  },
  deleteButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  deleteButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  imageContainer: {
    width: '40%', 
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopRightRadius : 10,
    borderBottomRightRadius : 10
  },
});

export default Obj;