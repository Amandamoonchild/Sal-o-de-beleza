import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
 

const Produto = () => {

  const navigation = useNavigation();

    return (
      <View style={styles.container}>
      <TouchableOpacity
    style={styles.navButton}
    onPress={() => navigation.navigate("Apse")}
  >
    <Text style={styles.placeholder}>Apse</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.navButton}
    onPress={() => navigation.navigate("WidiCare")}
  >
    <Text style={styles.placeholder}>WidiCare</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.navButton}
    onPress={() => navigation.navigate("Arvensis")}
  >
    <Text style={styles.placeholder}>Arvensis</Text>
  </TouchableOpacity>
    </View>
      );
    }

    
export default Produto
