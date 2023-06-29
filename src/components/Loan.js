import { View, Text } from "react-native"

export default function Loan() {
  return (
    <View className=" flex gap-2  w-screen p-6">
      <Text className="font-medium text-xl">Empréstimo</Text>
      <Text className="ml-4 font-medium text-sm text-[#646464]">
        Dinheiro do negócio está em dia.
      </Text>
    </View>
  )
}
