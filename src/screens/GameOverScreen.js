import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({
  guessRounds,
  userSelectNumber,
  configureNewGame
}) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of Rounds: {guessRounds}</Text>
      <Text>Number was : {userSelectNumber}</Text>
      <Button title="NEW GAME" onPress={configureNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
