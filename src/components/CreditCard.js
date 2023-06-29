import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icone from "react-native-vector-icons/FontAwesome"

export default function CreditCard() {
  return (
    <TouchableOpacity className="flex flex-row p-6 justify-between">
      <View className="flex gap-4">
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
      <Icone name="chevron-right" size={18} color={"#696969"} />
    </TouchableOpacity>
  )
}
