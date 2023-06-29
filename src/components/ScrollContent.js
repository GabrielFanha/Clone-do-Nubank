import { TouchableOpacity, Text, ScrollView } from "react-native"

export default function ScrollContent() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="flex-1 pl-6 max-h-24 w-screen"
    >
      <TouchableOpacity className="flex justify-center mr-3 p-4 rounded-xl bg-[#f0f1f5] h-20 w-[263px]">
        <Text className="text-sm font-medium">
          Seu{" "}
          <Text className="text-[#9c3bdc] font-semibold">
            informe de rendimenos
          </Text>{" "}
          2022 já está disponível
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex justify-center mr-3 p-4 rounded-xl bg-[#f0f1f5] h-20 w-[263px]">
        <Text className="text-sm font-medium">
          Seu{" "}
          <Text className="text-[#9c3bdc] font-semibold">
            informe de rendimenos
          </Text>{" "}
          2022 já está disponível
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex justify-center p-4 rounded-xl bg-[#f0f1f5] h-20 w-[263px] mr-12">
        <Text className="text-sm font-medium">
          Seu{" "}
          <Text className="text-[#9c3bdc] font-semibold">
            informe de rendimenos
          </Text>{" "}
          2022 já está disponível
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
