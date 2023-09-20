import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Recherche from '../components/Recherche';
import Swipe from '../components/Swipe';
import { TOP_PLACES, VILLE } from '../data/index';
import ObjectPicCarousel from '../components/ObjectPicCarousel';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import i18next, { languageResources } from '../services/i18next';
import { useTranslation } from 'react-i18next';
import SwipePlaces from '../components/SwipePlaces';
import SwipeTradition from '../components/SwipeTradition';

export default function Home() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={{flex:1}}> 
    <Header />
    <ScrollView style={styles.container}>
      

      <View style={styles.section}>
      <SwipePlaces />
        </View>

      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("Offre-spéciale")}</Text>
          <ObjectPicCarousel list={TOP_PLACES} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("Ville-plus-visité")}</Text>
          <ObjectPicCarousel list={VILLE} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("Beaux-endroits")}</Text>
          <Swipe />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("Traditions")}</Text>
          <SwipeTradition />
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 13,
  },
  contentContainer: {
    marginTop: 20, 
  },
  section: {
    marginBottom: 24,
    backgroundColor: "#F1F5F7",
    borderRadius: 10,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    padding: 16,
  },
});
