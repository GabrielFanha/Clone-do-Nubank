import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native"

export default function Discover() {
  const ImgOne = require("../assets/6.png")

  return (
    <>
      <View className="flex p-6">
        <Text className="font-medium text-xl">Descubra mais</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="gap-3 pl-6"
      >
        <View className="flex flex-col h-[500px] w-[210px]">
          <Image source={ImgOne} className="h-[105px] w-[210px] rounded-t-xl" />

          <View className="h-[168px] w-[210px] flex flex-col rounded-b-xl px-4 py-2 bg-[#EFEFEF]">
            <View className="flex gap-3 mb-6">
              <Text className="font-medium text-sm">Pix no Crédito</Text>
              <Text className="font-medium text-xs text-[#757575]">
                Veja o vídeo para saber tudo sobre essa nova função.
              </Text>
            </View>
            <TouchableOpacity className="text-white font-bold text-base bg-[#8A19D6] rounded-3xl h-12 w-24 flex items-center justify-center">
              <Text className="text-white font-medium text-sm">Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-col h-[500px] w-[210px]">
          <Image source={ImgOne} className="h-[105px] w-[210px] rounded-t-xl" />

          <View className="h-[168px] w-[210px] flex flex-col rounded-b-xl px-4 py-2 bg-[#EFEFEF]">
            <View className="flex gap-3 mb-6">
              <Text className="font-medium text-sm">Pix no Crédito</Text>
              <Text className="font-medium text-xs text-[#757575]">
                Veja o vídeo para saber tudo sobre essa nova função.
              </Text>
            </View>
            <TouchableOpacity className="text-white font-bold text-base bg-[#8A19D6] rounded-3xl h-12 w-24 flex items-center justify-center">
              <Text className="text-white font-medium text-sm">Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-col h-[500px] w-[210px] mr-12">
          <Image source={ImgOne} className="h-[105px] w-[210px] rounded-t-xl" />

          <View className="h-[168px] w-[210px] flex flex-col rounded-b-xl px-4 py-2 bg-[#EFEFEF]">
            <View className="flex gap-3 mb-6">
              <Text className="font-medium text-sm">Pix no Crédito</Text>
              <Text className="font-medium text-xs text-[#757575]">
                Veja o vídeo para saber tudo sobre essa nova função.
              </Text>
            </View>
            <TouchableOpacity className="text-white font-bold text-base bg-[#8A19D6] rounded-3xl h-12 w-24 flex items-center justify-center">
              <Text className="text-white font-medium text-sm">Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
