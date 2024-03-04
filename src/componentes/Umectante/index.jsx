import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"

const Umectante = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
    <Text style={styles.title}>Sobre a Umectação</Text>
    <Image source={require("./../../../assets/umec.jpg")}  style={styles.img}/>
    <Text style={styles.txt}>A umectação capilar é um tratamento feito 
    com óleos vegetais e tem como proposta repor os nutrientes que foram 
    perdidos pelo cabelo. Como resultado, os fios ficam mais fortes, 
    saudáveis e cheios de brilho.</Text>
      <Text style={styles.txt}>R$:150,00</Text>
    <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Home")}
        >
        </TouchableOpacity>
    </View>
    )
}

export default Umectante