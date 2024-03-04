import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"

const Crespos = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
  <Text style={styles.title}>Sobre o corte para cabelos crespos</Text>
  <Image source={require("./../../../assets/crespo.jpg")}  style={styles.img}/>
  <Text style={styles.txt}>Uma dúvida muito comum é sobre se o corte deve ser 
  feito com os fios molhados ou secos. Sugerimos apenas que tenha em mente o 
  fator encolhimento do cabelo crespo. Molhado os fios esticam mais e ao secar 
  pode diminuir de tamanho aparentemente. Já com os fios secos será possível 
  visualizar o corte e o tamanho que o cabelo vai ficar.</Text>
    <Text style={styles.txt}> R$: 120,00</Text>
  <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
      </TouchableOpacity>
  </View>
  )
}


export default Crespos