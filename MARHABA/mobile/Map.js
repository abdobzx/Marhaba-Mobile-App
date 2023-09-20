import * as React from "react"
import { Dimensions, StyleSheet, Text, View,TouchableOpacity,Image } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"

export default function Map2() {

	const [ region, setRegion ] = React.useState({
		latitude: 33.569500,
		longitude: -7.631292,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})

	return (
  <>
		 <View>
         
         <View style={styles.view}>
          
          <View style={styles.headertxt}>
            <Text style={{fontWeight:"bold",fontSize:25,left:"6%"}}>Map</Text>
          </View>
          <TouchableOpacity
            style={styles.headerbutton}
            activeOpacity={0.5}>
              <Image source={require("./assets/menu.png")} style={styles.headerbuttonImage}/>
          </TouchableOpacity>
        </View>
   
    </View>
		<View style={{marginTop:0 }}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {
					console.log(data, details)
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "KEY",
					language: "en",
					components: "country:mar",
					types: "establishment",
					radius: 30000,
					location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1, },
					listView: { backgroundColor: "white" }
				}}
			/>
			<MapView
				style={styles.map}
				provider="google"
			>
				<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
			</MapView>
		</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		height:'90%'

	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
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

	

 
})