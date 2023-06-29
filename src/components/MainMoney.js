import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

export default function MainMoney() {
  return (
    <TouchableOpacity className="p-6 flex-row justify-between ">
      <View>
        <Text className=" font-medium text-2xl text-black dark:text-white">
          Conta
        </Text>
        <Text className="font-semibold text-3xl text-black dark:text-white">
          R$ 3.249,00
        </Text>
      </View>
      <Icon name="chevron-right" size={18} color={"#696969"} />
    </TouchableOpacity>
  )
}
