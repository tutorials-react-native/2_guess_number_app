import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ style, children }) => {
  return <View style={{ ...styles.inputContainer, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, hiegh: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
