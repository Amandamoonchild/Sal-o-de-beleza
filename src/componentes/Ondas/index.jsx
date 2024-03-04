import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"


const Ondas = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
  <Text style={styles.title}>Sobre o corte para cabelos ondulados</Text>
  <Image source={require("./../../../assets/ondas.jpg")}  style={styles.img}/>
  <Text style={styles.txt}> os cortes em camadas são os que mais valorizam 
  esse tipo de cabelo. “O corte médio repicado, para mim, é o que mais valoriza 
  os fios ondulados. Quando eles ficam muito compridos essa ondulação fica pesada, 
  e quando ficam muito curtos, a ondulação quase desaparece.</Text>
  <Text style={styles.txt}> R$: 120,00</Text>
  <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
      </TouchableOpacity>
  </View>
  )
}

export default Ondas