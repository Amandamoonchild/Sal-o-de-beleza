import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
 

const Tratamentos = () => {

  const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Hidration")}
      >
        <Text style={styles.placeholder}>Hidration</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Acidificante")}
      >
        <Text style={styles.placeholder}>Acidificante</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Umectante")}
      >
        <Text style={styles.placeholder}>Umectante</Text>
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
    

export default Tratamentos
