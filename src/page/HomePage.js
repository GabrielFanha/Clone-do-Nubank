import { View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"

import Header from "../components/Header"
import MainMoney from "../components/MainMoney"
import ScrollNav from "../components/ScrollNav"
import CardCarton from "../components/CardCarton"

export default function HomePage() {
  return (
    <View className="flex-1 w-screen bg-white  dark:bg-black">
      <Header />
      <MainMoney />
      <ScrollNav />
      <CardCarton />
    </View>
  )
}
