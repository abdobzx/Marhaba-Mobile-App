import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Image, Text, ImageBackground, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import ObjectPicCarouselMo from "../components/Object/ObjectPicCarouselMo";
import ObjectPicCarouselAc from "../components/Object/ObjectPicCarouselAc";
import ObjectPicCarouselRe from "../components/Object/ObjectPicCarouselRe";
import ObjectPicCarouselLo from "../components/Object/ObjectPicCarouselLo";
import ObjectPicCarouselMa from "../components/Object/ObjectPicCarouselMa";
import ObjectPicCarouselPr from "../components/Object/ObjectPicCarouselPr";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

import Swipe from "../components/Swipe";
import HeadSwipWithTxt from "../components/Headtext";
import ObjInfoMo from "./ObjInfo/ObjInfoMo";
import ObjInfoAc from "./ObjInfo/ObjInfoAc";
import ObjInfoRe from "./ObjInfo/ObjInfoRe";
import ObjInfoLo from "./ObjInfo/ObjInfoLo";
import ObjInfoMa from "./ObjInfo/ObjInfoMa";
import ObjInfoPr from "./ObjInfo/ObjInfoPr";


export default function City() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {t} = useTranslation();

  const handleRefresh = async () => {
    setRefreshing(true);

    try {
    } catch (error) {
      console.error('Erreur lors du rafraîchissement :', error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <>
      <View>
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.headerbutton1}
            activeOpacity={0.5}
            onPress={() => { navigation.navigate('Home') }}
          >
            <Image source={require("../assets/fleche.png")} style={styles.headerbuttonImage1} />
          </TouchableOpacity>
          <View style={styles.headertxt}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>CASABLANCA</Text>
          </View>
          <TouchableOpacity
            style={styles.headerbutton}
            activeOpacity={0.5}
            onPress={() => { navigation.navigate('Trip') }}>
            <Image source={require("../assets/heart.png")} style={styles.headerbuttonImage} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      >
        <HeadSwipWithTxt />
        <Text style={{color: "white", fontWeight: 'bold', paddingLeft: '2%', marginTop: '5%', marginBottom: '5%', fontSize: 23, backgroundColor: '#8fbc8f', width: 150, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => { navigation.navigate('ObjInfoMo') }}>{t("Monuments")}</Text>
        <ObjectPicCarouselMo />
        <Text style={{ color: "white", fontWeight: 'bold', paddingLeft: '2%', marginTop: '5%', marginBottom: '5%', fontSize: 23, backgroundColor: '#8fbc8f', width: 120, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => { navigation.navigate('ObjInfoAc') }}>{t("Activités")}</Text>
        <ObjectPicCarouselAc />
        <Text style={{ color: "white", fontWeight: 'bold', paddingLeft: '2%', marginTop: '5%', marginBottom: '5%', fontSize: 23, backgroundColor: '#8fbc8f', width: 150, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => { navigation.navigate('ObjInfoRe') }}>{t("Restaurants")}</Text>
        <ObjectPicCarouselRe />
        <Text style={{ color: "white", fontWeight: 'bold', paddingLeft: '2%', marginTop: '5%', marginBottom: '5%', fontSize: 23, backgroundColor: '#8fbc8f', width: 110, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => { navigation.navigate('ObjInfoLo') }}>{t("Logements")}</Text>
        <ObjectPicCarouselLo />
        <Text style={{ color: "white", fontWeight: 'bold', paddingLeft: '2%', marginTop: '5%', marginBottom: '5%', fontSize: 23, backgroundColor: '#8fbc8f', width: 120, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => { navigation.navigate('ObjInfoPr') }}>{t("Produits")}</Text>
        <ObjectPicCarouselPr />
        <Text style={{ color: "white", fontWeight: 'bold', paddingLeft: '2%', marginTop: '5%', marginBottom: '5%', fontSize: 23, backgroundColor: '#8fbc8f', width: 90, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => { navigation.navigate('ObjInfoMa') }}>{t("Magasins")}</Text>
        <ObjectPicCarouselMa />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 5,
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  headertxt: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    textAlign: 'center',
    marginTop: 2,
  },
  headerbutton1: {
    height: 40,
    margin: 5,
    width: 40,
    alignItems: 'flex-start'
  },
  headerbutton: {
    height: 40,
    margin: 5,
    width: 40,
    alignItems: 'flex-end'
  },
  headerbuttonImage: {
    padding: 10,
    marginTop: 3,
    marginRight: 10,
    height: 35,
    width: 35,
  },
  headerbuttonImage1: {
    padding: 10,
    marginTop: 2,
    marginLeft: 8,
    height: 40,
    width: 35,
  },
});
