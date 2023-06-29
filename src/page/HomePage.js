import { ScrollView, View } from "react-native"

import Header from "../components/Header"
import MainMoney from "../components/MainMoney"
import ScrollNav from "../components/ScrollNav"
import CardCarton from "../components/CardCarton"
import ScrollContent from "../components/ScrollContent"
import CreditCard from "../components/CreditCard"

export default function HomePage() {
  return (
    <ScrollView className="bg-[#8A19D6]">
      <View className="flex-1 h-auto divide-y-2 divide-[#f0f1f5] bg-white dark:bg-black">
        <Header />
        <MainMoney />
        <ScrollNav />
        <CardCarton />
        <ScrollContent />
        <View className="my-2" />
        <CreditCard />
      </View>
    </ScrollView>
  )
}
