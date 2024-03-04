import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"


const Cachos = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
  <Text style={styles.title}>Sobre o corte para cabelos cacheados</Text>
  <Image source={require("./../../../assets/cacho.jpg")}  style={styles.img}/>
  <Text style={styles.txt}>O corte em camadas é ideal para dar volume aos cachos! 
  Esse tipo de cabelo deixa o visual com aspecto de cheio, já que distribui o 
  volume e definição das pontas. Além do corte em camada, outras opções de
   cortes para dar volume são o swag e o corte assimétrico.</Text>
    <Text style={styles.txt}> R$: 120,00</Text>
  <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
      </TouchableOpacity>
  </View>
  )
}



export default Cachos