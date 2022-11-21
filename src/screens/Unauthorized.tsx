import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import bg from "../../assets/login-bg.jpg";
import { Button, LinkButton } from "../components/Button";
import { RootStackParamList } from "./Stacks";

type Props = NativeStackScreenProps<RootStackParamList, "Unauthorized">;

export default function Unauthorized({ navigation }: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500 px-12">
      <Image source={bg} className="absolute" />

      <View className="bg-slate-900 space-y-4 rounded-md py-8 px-4 shadow-md w-full items-center shadow-yellow-400">
        <Button onPress={() => navigation.replace("Home")}>Log in</Button>

        <Button type="secondary" onPress={() => alert("Register.")}>
          Sign up
        </Button>
      </View>

      <View className="py-8 w-full flex flex-col items-center">
        <Text className="text-white">For authorized installers</Text>
        <LinkButton onPress={() => navigation.navigate("InstallerSetup")}>
          Install charging station
        </LinkButton>
      </View>
    </View>
  );
}
