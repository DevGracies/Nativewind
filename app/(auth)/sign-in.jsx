import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-full px-4 my-6"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
            Login into Aora
          </Text>
          <FormField
            title={"Email"}
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles={"mt-7"}
            keyboardType="email-address"
          />
          <FormField
            title={"Password"}
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles={"mt-7"}
          />
          <Button />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
