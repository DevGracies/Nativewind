// app/(auth)_customLayout.js or (auth)/_customLayout.js
import React from "react";
import { View, Text } from "react-native";

const CustomLayout = ({ children }) => {
  return <View style={{ flex: 1, padding: 20 }}>{children}</View>;
};

export default CustomLayout;
