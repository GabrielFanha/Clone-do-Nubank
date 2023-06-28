import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

export default function CardCarton() {
  return (
    <View className="flex-1">
      <View>
        <Icon
          name="payments"
          size={22}
          className="text-black dark:text-white"
        />
      </View>
      <Text>Caixinha</Text>
    </View>
  )
}
