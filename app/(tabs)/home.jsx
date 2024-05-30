import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";

const Header = () => {
  return (
    <View>
      <View>
        <Text className=" font-pmedium text-sm text-gray-100">
          Welcome Back
        </Text>
        <Text className="text-2xl font-psemibold text-white">JSMastery</Text>
      </View>
      <View className="mt-1.5">
        <Image
          source={images.logoSmall}
          className="w-9 h-10"
          resizeMode="contain"
        />
      </View>
      <SearchInput />
      <View className="w-full flex-1 pt-5 pb-8">
        <Text className="text-gray-100 text-lg font-pregular mb-3">
          Trending Videos
        </Text>
        <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
        the double
      </View>
    </View>
  );
};
const Home = () => {
  return (
    <SafeAreaView className=" bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text className="text-3xl"> {item.id} </Text>}
        ListHeaderComponent={Header}
      />
    </SafeAreaView>
  );
};

export default Home;
