
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/home"
import Produto from "./src/screens/Produto"
import Apse from "./src/screens/Apse";
import Arvensis from "./src/screens/Arvensis";
import WidiCare from "./src/screens/WidiCare";
import Cabelo from "./src/componentes/Cabelo";
import Cachos from "./src/componentes/Cachos";
import Ondas from "./src/componentes/Ondas";
import Crespos from "./src/componentes/Crespos";

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
        <Stack.Screen name="Cabelo" component={Cabelo} />
        <Stack.Screen name="Cachos" component={Cachos} />
        <Stack.Screen name="Ondas" component={Ondas} />
        <Stack.Screen name="Crespos" component={Crespos} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}