import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"


const Aboutme = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
    <Text style={styles.title}>Amanda dos Santos Silva</Text>
    <Image source={require("./../../../assets/eu.jpeg")}  style={styles.img}/>
    <Text style={styles.txt}>Apaixonada por beleza, decidi usar o meu curso para desenvolver 
    algo que eu realmente me identifico: Estética! Aqui, busco trazer infos 
    sobre meu salão de beelza fictício incluindo alguns dos meus produtos e 
    tratamentos favoritos!</Text>
    <Text style={styles.txt}>R$:999.999.999.999.99</Text>
    <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Home")}
        >
        </TouchableOpacity>
    </View>
    )
}




export default Aboutme