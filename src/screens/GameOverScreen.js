import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import { TitleText, BodyText } from "components/Text";
import successImage from "assets/success.png";

const GameOverScreen = ({
  guessRounds,
  userSelectNumber,
  configureNewGame
}) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer} overflow="hidden">
        <Image source={successImage} style={styles.image} resizeMode="cover" />
      </View>
      <BodyText>Number of Rounds: {guessRounds}</BodyText>
      <BodyText>Number was : {userSelectNumber}</BodyText>
      <Button title="NEW GAME" onPress={configureNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default GameOverScreen;
