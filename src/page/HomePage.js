import { ScrollView, View } from "react-native"

import Header from "../components/Header"
import MainMoney from "../components/MainMoney"
import ScrollNav from "../components/ScrollNav"
import CardCarton from "../components/CardCarton"
import ScrollContent from "../components/ScrollContent"
import CreditCard from "../components/CreditCard"
import StatusPagaments from "../components/StatusPagaments"
import Loan from "../components/Loan"
import Discover from "../components/Discover"

export default function HomePage() {
  return (
    <View className="flex-1 h-auto bg-white dark:bg-black">
      <ScrollView className="divide-y-2 divide-[#f0f1f5]">
        <Header />
        <MainMoney />
        <ScrollNav />
        <CardCarton />
        <ScrollContent />
        <View className="my-2" />
        <CreditCard />
        <View className="my-2" />
        <StatusPagaments />
        <View className="my-2" />
        <Loan />
        <View className="my-2" />
        <Discover />
      </ScrollView>
    </View>
  )
}
