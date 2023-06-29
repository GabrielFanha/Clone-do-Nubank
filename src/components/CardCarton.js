import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

export default function CardCarton() {
  return (
    <TouchableOpacity className="flex m-6 bg-[#f0f1f5] h-14 w-[368px] rounded-xl p-4 flex-row items-center">
      <View>
        <Icon
          name="payments"
          size={22}
          className="text-black dark:text-white"
        />
      </View>
      <Text className="pl-4 ">Caixinha</Text>
    </TouchableOpacity>
  )
}
