import React from "react"
import { View, Text, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

export default function Tabs() {
  return (
    <View className="h-[100px] mt-10">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-1 flex-row overflow-y-auto px-2"
      >
        <View className="w-[100px] h-[100px] bg-[#8530b3] ml-2 rounded flex justify-between p-2">
          <Icon name="person-add" size={24} color="#FFF" />
          <Text className="text-sm text-gray-300">Indicar amigos</Text>
        </View>
        <View className="w-[100px] h-[100px] bg-[#8530b3] ml-2 rounded flex justify-between p-2 pb-4">
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <Text className="text-sm text-gray-300">Cobrar</Text>
        </View>
        <View className="w-[100px] h-[100px] bg-[#8530b3] ml-2 rounded flex justify-between p-2 pb-4">
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <Text className="text-sm text-gray-300">Depositar</Text>
        </View>
        <View className="w-[100px] h-[100px] bg-[#8530b3] ml-2 rounded flex justify-between p-2 pb-4">
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <Text className="text-sm text-gray-300">Transferir</Text>
        </View>
        <View className="w-[100px] h-[100px] bg-[#8530b3] ml-2 rounded flex justify-between p-2">
          <Icon name="lock" size={24} color="#FFF" />
          <Text className="text-sm text-gray-300">Bloquear cartão</Text>
        </View>
      </ScrollView>
    </View>
  )
}
