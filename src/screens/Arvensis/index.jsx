import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"

const Arvensis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <Text style={styles.title}>Máscara de hidratação Arvensis</Text>
  <Image source={require("./../../../assets/arvensis.jpg")}  style={styles.img}/>
  <Text style={styles.txt}>Enriquecida com filtro solar, ainda protege contra danos externos. 
    Modo de usar: Com os cabelos úmidos e limpos, espalhe uma quantidade na 
    palma das mãos e aplique nos fios modelando por mechas. Não enxaguar.</Text>
    <Text style={styles.txt}>Por apenas R$:55,99</Text>
  <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
      </TouchableOpacity>
  </View>
  )
}



export default Arvensis