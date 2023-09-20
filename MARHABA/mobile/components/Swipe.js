import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";

export default function Swipe (){
    return(
      <View >
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Swiper
                autoplay
                showsButtons={false}
            >
                <Image
                    source={require("../assets/cc.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                />
                <Image
                    source={require("../assets/ess.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                />
                <Image
                    source={require("../assets/ff.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                />

            </Swiper>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems:'center',
        margin : 5,
        height:230,
        marginTop:"2%",
        borderRadius:7
    },
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:350,
        borderRadius:7
        
    }

})