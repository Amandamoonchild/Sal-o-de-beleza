import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"


const Acidificante = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
    <Text style={styles.title}>Sobre a Acidificação</Text>
    <Image source={require("./../../../assets/acid.jpg")}  style={styles.img}/>
    <Text style={styles.txt}>De forma simplificada, a acidificação capilar 
    é um tratamento poderoso, que você faz rapidinho em casa com produtos 
    acidificantes, ou seja, que têm o pH mais baixo e, por isso, estabilizam
     e equilibram o pH dos fios, além de selar as cutículas, alinhar os fios,
      reduzir o frizz e doar mais brilho.</Text>
      <Text style={styles.txt}>R$:150,00</Text>
    <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Home")}
        >
        </TouchableOpacity>
    </View>
    )
}



export default Acidificante