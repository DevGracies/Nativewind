import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="flex-base mt-0.5 text-white font-pregular flex-1"
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;