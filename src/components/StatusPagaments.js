import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

export default function StatusPagaments() {
  return (
    <View className=" flex gap-5 w-screen p-6">
      <Text className="font-medium text-xl">Acompanhe também</Text>
      <TouchableOpacity className="flex flex-row bg-[#f0f1f5] h-14 w-[368px] rounded-xl items-center p-4">
        <Icon name="recycle" size={24} color={"#000"} />
        <Text className="ml-4 font-medium text-sm">
          Assistente de pagamentos
        </Text>
      </TouchableOpacity>
    </View>
  )
}
