import { View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
import Icon from "react-native-vector-icons/MaterialIcons"

import Tabs from "../components/Tabs"
import Header from "../components/Header"

export default function oldMain() {
  return (
    <View className="flex-1 bg-[#8B10AE] items-center pt-20 pb-[30px]">
      <Header />

      <View className="flex-1 max-h-[400px] z-[5]">
        <View className="flex-1 bg-white rounded my-5 h-[100%] absolute left-[-190]">
          <View className="flex-row justify-between items-center p-[30px]">
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </View>
          <View className="flex-1 px-[30px] justify-center">
            <Text className="text-sm text-gray-600">Saldo disponível</Text>
            <Text className="text-3xl mt-[3px] text-[#333]">R$ 7.611,50</Text>
          </View>
          <View className="p-[30px] bg-[#eee] rounded">
            <Text className="text-xs text=[#333]">
              Transferência de R$ 20,00 recebida de Danillo Theodoro
            </Text>
          </View>
        </View>
      </View>

      <Tabs />
      <StatusBar style="light-content" backgroundColor="#8B10AE" />
    </View>
  )
}
