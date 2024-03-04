import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

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
    onPress={() => navigation.navigate("Umectante")}
  >
    <Text style={styles.placeholder}>Umectante</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.navButton}
    onPress={() => navigation.navigate("Acidificante")}
  >
    <Text style={styles.placeholder}>Acidificante</Text>
  </TouchableOpacity>
    </View>
      );
    }
    

export default Tratamentos
