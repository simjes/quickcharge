import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import InstallerSetup from "./src/screens/InstallerSetup";
import { RootStackParamList } from "./src/screens/Stacks";
import Unauthorized from "./src/screens/Unauthorized";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Unauthorized">
        <RootStack.Group>
          <RootStack.Screen
            name="Unauthorized"
            component={Unauthorized}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="Home" component={Home} />
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen
            name="InstallerSetup"
            component={InstallerSetup}
            options={{ title: "Install product" }}
          />
        </RootStack.Group>
      </RootStack.Navigator>

      <StatusBar style="light" />
    </NavigationContainer>
  );
}
