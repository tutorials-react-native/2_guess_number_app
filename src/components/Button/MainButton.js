import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Color from "color";

const MainButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 18
  }
});

export default MainButton;
