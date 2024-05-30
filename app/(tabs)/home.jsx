import { View, Text, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import RefreshControl from "../../components/RefreshControl";

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
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // recall videos
    setRefreshing(false);
  };
  return (
    <SafeAreaView className=" bg-primary h-full">
      {/* if you are struggling with positioning you can add styling using border-2 bordercolor  */}
      {/* the reason we are using the flatlist instead of the scrollView is because the flatlist supports both vertical and horizontal list unlike scrollView which don't support vertical and horizontal view at the same time.  */}
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text className="text-3xl"> {item.id} </Text>}
        ListHeaderComponent={Header}
        ListEmptyComponent={() => (
          <EmptyState
            title={"No Video Found"}
            subtitle={"No Video Created yet"}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // just like instagram, tiktok
        }
      />
    </SafeAreaView>
  );
};

export default Home;
