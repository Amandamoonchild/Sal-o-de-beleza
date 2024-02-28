import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-web';


const WidiCare = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <Text>Linha de produtos "Juba" da WidiCare</Text>
  <Image source={require("./../../../assets/juba.jpg")} style={styles.img}/>
  <Text>A linha de tratamento Juba foi especialmente desenvolvida 
    para as necessidades dos cabelos ondulados (2a, 2b e 2c), cacheados 
    (3a,3b e 3c) e crespos (4a,4b e 4c), proporcionando brilho, definição 
    e hidratação aos fios.</Text>
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

export default WidiCare