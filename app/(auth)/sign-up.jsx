import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setform] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);
  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] px-4 my-6"
          />
          <Text className="text-2xl text-white font-semibold mt-2 font-psemibold">
            Signup to Aora
          </Text>
          <FormField
            title={"Username"}
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
            otherStyles={"mt-10"}
          />
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
          <Button
            title={"Sign In"}
            handlePress={submit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href={"./sign-in"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
