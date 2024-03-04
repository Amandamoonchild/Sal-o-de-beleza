import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-web';


const Hidration = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
    <Text>Sobre a Hidratação</Text>
    <Image source={require("./../../../assets/apse.jpg")}  style={styles.img}/>
    <Text>Após lavar e condicionar os cabelos com a linha SOS Cachos, 
      aplique nos cabelos molhados ou secos o Ativador e Modelador Anti-Frizz 
      SOS Cachos com o auxílio de um pente ou utilizando a sua técnica de aplicação 
      favorita. Não é necessário enxaguar. Pode ser usado todos os dias.</Text>
    <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Home")}
        >
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D3d593",
      alignItems: "center",
      justifyContent: "center",
      width: 300,
      textAlign: "center",
      marginLeft: 30,
      marginTop: 80,
      marginBottom: 80,
      height: 50,
      textAlign: "center"
    },
     img: {
      width: 200,
      height: 200
  }
  
  });

export default Hidration