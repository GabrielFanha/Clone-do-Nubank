import { View, Text } from "react-native"

export default function MainMoney() {
  return (
    <View className="p-6">
      <Text className="font-sans font-medium text-2xl text-black dark:text-white">
        Conta
      </Text>
      <Text className="font-sans font-bold text-3xl text-black dark:text-white">
        R$ 3.249,00
      </Text>
    </View>
  )
}
