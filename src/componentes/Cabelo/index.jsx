import { View, Text } from 'react-native'
import React from 'react'

const Cabelo = () => {
    return (
        <View style={styles.container}>
          <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Cachos")}
      >
        <Text style={styles.placeholder}>Cachos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Ondas")}
      >
        <Text style={styles.placeholder}>Ondas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Crespos")}
      >
        <Text style={styles.placeholder}>Crespos</Text>
      </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF",
      alignItems: "center",
      justifyContent: "center",
    },
    navButton: {
      marginTop: 20,
      padding: 10,
      color: "black",
      borderRadius: 5,
      width: 120,
      backgroundColor: "#D3d593"
    },
    placeholder: {
      textAlign: "center",
    }

  });
  


export default Cabelo