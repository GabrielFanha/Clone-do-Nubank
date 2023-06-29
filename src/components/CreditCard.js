import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default function CreditCard() {
  return (
    <View className="flex p-5 gap-4">
      <Icon
        name="credit-card-check-outline"
        size={30}
        className="text-black dark:text-white"
      />
      <Text className="text-2xl font-medium">Cartão de crédito</Text>
      <Text className="text-sm font-medium">
        Peca seu cartão de crédito sem anuidade e tenha mais controle da sua
        vida financeira.
      </Text>
      <TouchableOpacity className="text-white font-bold text-base bg-[#8A19D6] rounded-3xl h-12 flex items-center justify-center w-36">
        <Text className="text-white font-bold text-base">Pedir Cartão</Text>
      </TouchableOpacity>
    </View>
  )
}
