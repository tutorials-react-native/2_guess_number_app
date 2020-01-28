import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import { TitleText, BodyText } from "components/Text";
import { MainButton } from "components/Button";
import successImage from "assets/success.png";

const successImageWeb = "https://www.dw.com/image/48396304_303.jpg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const isBigWidth = windowWidth > 300;
const isBigHeight = windowHeight > 600;

const GameOverScreen = ({
  guessRounds,
  userSelectNumber,
  configureNewGame
}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollConatiner}>
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
            Your Phone needed{" "}
            <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userSelectNumber}</Text>
          </BodyText>
        </View>

        <MainButton onPress={configureNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    borderRadius: (windowWidth * 0.7) / 2,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: isBigHeight ? 30 : 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: isBigHeight ? 15 : 5
  },
  resultText: {
    textAlign: "center",
    fontSize: isBigHeight ? 20 : 12
  },
  highlight: {
    color: "red",
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
