import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import Icone from "react-native-vector-icons/FontAwesome"

export default function Header() {
  const name = "Gabriel Lara Fanha"

  return (
    <View className="flex-1 flex-col bg-[#8A19D6] max-h-[200px] w-screen rounded-t-lg items-start justify-center pt-[80px] pl-6 pr-6 pb-6">
      <View className="flex flex-row w-screen justify-between items-center">
        <View className="p-3 bg-[#9c3bdc] rounded-full">
          <Icon name="user" size={30} color="#FFF" />
        </View>

        <View className="flex flex-row gap-6 items-center w-screen pl-48">
          <Icon name="eyeo" size={28} color="#FFF" />
          <Icone name="question-circle-o" size={28} color="#FFF" />
          <Icone name="envelope-o" size={24} color="#FFF" />
        </View>
      </View>
      <Text className="mt-10 text-white font-bold text-lg font-sans">
        Óla, {name}
      </Text>
    </View>
  )
}
