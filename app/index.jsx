import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import Button from "../components/Button";
import { router } from "expo-router";
const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[65vh] px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="w-[380px] h-[300px]"
          />
        </View>
        <View className="relative mt-5">
          <Text className="text-3xl text-white font-bold text-center">
            Discover endless possibilities with{" "}
            <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image
            className="w-[136px] h-[15px] absolute -bottom-16 right-20"
            resizeMode="contain"
            source={images.path}
          />
          <Text className="text-gray-100 text-sm font-pregular mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a journey of Limitless
            Expoloration with Aora
          </Text>
          <Button
            title={"Continue with Email"}
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
        <StatusBar style="light" backgroundColor="#161622" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
