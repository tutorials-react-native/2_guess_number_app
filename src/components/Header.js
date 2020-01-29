import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Color from "color";
import { TitleText, BodyText } from "components/Text";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "white",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
      }
    })
  },
  title: {
    color: Platform.OS === "android" ? "black" : Color.primary
  }
});

export default Header;
