import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"

const WidiCare = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <Text style={styles.title}>Linha de produtos "Juba" da WidiCare</Text>
  <Image source={require("./../../../assets/juba.jpg")} style={styles.img}/>
  <Text style={styles.txt}>A linha de tratamento Juba foi especialmente desenvolvida 
    para as necessidades dos cabelos ondulados (2a, 2b e 2c), cacheados 
    (3a,3b e 3c) e crespos (4a,4b e 4c), proporcionando brilho, definição 
    e hidratação aos fios.</Text>
    <Text style={styles.txt}>Kit completo por apenas R$:195,99</Text>
  <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
      </TouchableOpacity>
  </View>
  )
}


export default WidiCare