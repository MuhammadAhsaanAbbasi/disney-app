import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      className="flex-1 items-center justify-center"
    >
      <Text className="text-5xl text-red-500">
        Hijab Rabail Khan
      </Text>
      <Link href={'/search'}>
        On Boarding
      </Link>
      <Link href={'/profile'}>
        On Profile
      </Link>
    </View>
  );
}

export default Index
