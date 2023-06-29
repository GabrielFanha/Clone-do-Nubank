import { View, Text, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Icone from "react-native-vector-icons/MaterialCommunityIcons"
import IconAwesome from "react-native-vector-icons/Feather"

export default function ScrollNav() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="gap-3 pl-6 max-h-28"
    >
      <View className="flex items-center gap-1">
        <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
          <Icon
            name="attach-money"
            size={22}
            className="text-black dark:text-white"
          />
        </View>
        <Text className="font-medium text-sm">Área Pix</Text>
      </View>
      <View className="flex items-center gap-1">
        <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
          <Icon
            name="credit-card"
            size={22}
            className="text-black dark:text-white"
          />
        </View>
        <Text className="font-medium text-sm">Pagar</Text>
      </View>
      <View className="flex items-center gap-1">
        <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
          <Icone
            name="bank-transfer"
            size={26}
            className="text-black dark:text-white"
          />
        </View>
        <Text className="font-medium text-sm">Transferir</Text>
      </View>
      <View className="flex items-center gap-1">
        <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
          <Icone
            name="card-plus-outline"
            size={22}
            className="text-black dark:text-white"
          />
        </View>
        <Text className="font-medium text-sm">Depositar</Text>
      </View>
      <View className="flex items-center gap-1">
        <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
          <IconAwesome
            name="smartphone"
            size={22}
            className="text-black dark:text-white"
          />
        </View>
        <Text className="font-medium text-sm">Recarga</Text>
      </View>
      <View className="flex items-center gap-1 pr-12">
        <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
          <Icone
            name="piggy-bank-outline"
            size={22}
            className="text-black dark:text-white"
          />
        </View>
        <Text className="font-medium text-sm">Caixinha</Text>
      </View>
    </ScrollView>
  )
}
