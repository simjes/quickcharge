import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import bg from "./assets/login-bg.jpg";
import { Button, LinkButton } from "./src/components/Button";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500 px-12">
      <Image source={bg} className="absolute" />

      <View className="bg-slate-900 space-y-4 rounded-md py-8 px-4 shadow-md w-full items-center shadow-yellow-400">
        <Button onPress={() => alert("Logged in.")}>Log in</Button>

        <Button type="secondary" onPress={() => alert("Register.")}>
          Sign up
        </Button>
      </View>

      <View className="py-8 w-full flex flex-col items-center">
        <Text className="text-white">For authorized installers</Text>
        <LinkButton>Install charging station</LinkButton>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
