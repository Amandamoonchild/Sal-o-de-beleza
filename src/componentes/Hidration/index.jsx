import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from "./styles"


const Hidration = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
    <Text style={styles.title}>Sobre a Hidratação</Text>
    <Image source={require("./../../../assets/hidra.jpg")}  style={styles.img}/>
    <Text style={styles.txt}>Ela repõe a água e os nutrientes dos fios que 
    são perdidos no dia a dia com o uso de química, exposição ao clima e 
    poluição. Aprenda tudo sobre hidratação e recupere a saúde das suas 
    madeixas!</Text>
    <Text style={styles.txt}>R$:150,00</Text>
    <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Home")}
        >
        </TouchableOpacity>
    </View>
    )
}



export default Hidration