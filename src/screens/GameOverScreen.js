import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import { TitleText, BodyText } from "components/Text";
import { MainButton } from "components/Button";
import successImage from "assets/success.png";

const successImageWeb = "https://www.dw.com/image/48396304_303.jpg";

const GameOverScreen = ({
  guessRounds,
  userSelectNumber,
  configureNewGame
}) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer} overflow="hidden">
        <Image
          source={successImage}
          // source={{ uri: successImageWeb }}
          // fadeDuration={5000}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your Phone needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userSelectNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={configureNewGame}>NEW GAME</MainButton>
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
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: "red",
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
