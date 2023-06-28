import { View, Text, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Icone from "react-native-vector-icons/MaterialCommunityIcons"
import IconAwesome from "react-native-vector-icons/Feather"

export default function ScrollNav() {
  return (
    <View className="flex-1 pl-6">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-1 flex-row overflow-y-auto gap-3"
      >
        <View className="flex items-center gap-1">
          <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
            <Icon
              name="attach-money"
              size={22}
              className="text-black dark:text-white"
            />
          </View>
          <Text>Área Pix</Text>
        </View>
        <View className="flex items-center gap-1">
          <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
            <Icon
              name="credit-card"
              size={22}
              className="text-black dark:text-white"
            />
          </View>
          <Text>Pagar</Text>
        </View>
        <View className="flex items-center gap-1">
          <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
            <Icone
              name="bank-transfer"
              size={26}
              className="text-black dark:text-white"
            />
          </View>
          <Text>Transferir</Text>
        </View>
        <View className="flex items-center gap-1">
          <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
            <Icone
              name="card-plus-outline"
              size={22}
              className="text-black dark:text-white"
            />
          </View>
          <Text>Depositar</Text>
        </View>
        <View className="flex items-center gap-1">
          <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
            <IconAwesome
              name="smartphone"
              size={22}
              className="text-black dark:text-white"
            />
          </View>
          <Text>Recarga</Text>
        </View>
        <View className="flex items-center gap-1">
          <View className="flex items-center justify-center rounded-full bg-[#f0f1f5] w-16 h-16">
            <Icone
              name="piggy-bank-outline"
              size={22}
              className="text-black dark:text-white"
            />
          </View>
          <Text>Caixinha</Text>
        </View>
      </ScrollView>
    </View>
  )
}
