import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"

const Apse = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <Text style={styles.title}>Linha de produtos Apse</Text>
  <Image source={require("./../../../assets/apse.jpg")}  style={styles.img}/>
  <Text style={styles.txt}>Após lavar e condicionar os cabelos com a linha SOS Cachos, 
    aplique nos cabelos molhados ou secos o Ativador e Modelador Anti-Frizz 
    SOS Cachos com o auxílio de um pente ou utilizando a sua técnica de aplicação 
    favorita. Não é necessário enxaguar. Pode ser usado todos os dias.</Text>
    <Text style={styles.txt}>Kit completo por apenas R$:175,99</Text>
  <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
      </TouchableOpacity>
  </View>
  )
}


export default Apse