import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-web';

const Arvensis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <Text>Máscara de hidratação Arvensis</Text>
  <Image source={require("./../../../assets/arvensis.jpg")}  style={styles.img}/>
  <Text>Enriquecida com filtro solar, ainda protege contra danos externos. 
    Modo de usar: Com os cabelos úmidos e limpos, espalhe uma quantidade na 
    palma das mãos e aplique nos fios modelando por mechas. Não enxaguar.</Text>
  <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3d593",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    textAlign: "center",
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
    height: 50,
    textAlign: "center"
  },
   img: {
    width: 200,
    height: 200
}


});

export default Arvensis