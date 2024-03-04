import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./style";
export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/bckg.jpg")}  style={styles.img}/>
     <View style={styles.Welcome}>
      <Text style={styles.title}>BEM VINDO!</Text>
      <Text style={styles.txt}>Pensando no melhor tratamento possível para 
        cabelos naturalmente com curvaturas, o salão Trendy foi 
        criado para garantir o melhor atendimento possível para você, 
        em um ambiente seguro e de confiança para você!</Text>
     </View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Produto")}
      >
        <Text style={styles.placeholder}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Cabelo")}
      >
        <Text style={styles.placeholder}>Cabelo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Tratamentos")}
      >
        <Text style={styles.placeholder}>Tratamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Aboutme")}
      >
        <Text style={styles.placeholder}>Sobre mim</Text>
      </TouchableOpacity>
    </View>
    
  );
}
