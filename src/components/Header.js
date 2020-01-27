import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Color from "color";
import { TitleText, BodyText } from "components/Text";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
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
    justifyContent: "center"
  }
});

export default Header;
