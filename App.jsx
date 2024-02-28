
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/home"
import Produto from "./src/screens/Produto"
import Apse from "./src/screens/Apse";
import Arvensis from "./src/screens/Arvensis";
import WidiCare from "./src/screens/WidiCare";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={Produto} />
        <Stack.Screen name="Apse" component={Apse} />
        <Stack.Screen name="Arvensis" component={Arvensis} />
        <Stack.Screen name="WidiCare" component={WidiCare} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}