import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
 
const Cabelo = () => {
    const navigation = useNavigation();
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




export default Cabelo