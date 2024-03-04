import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.placeholder}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Cabelo")}
      >
        <Text style={styles.placeholder}>Cabelo</Text>
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
    backgroundColor: "lightgray",
    color: "black",
    borderRadius: 5,
    width: 120,
    backgroundColor: "#D3d593"
  },
  placeholder: {
    textAlign: "center",
  }
});