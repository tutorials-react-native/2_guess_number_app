import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "components/Header";
import { StartGameScreen, GameScreen, GameOverScreen } from "screens";

export default function App() {
  const [userSelectNumber, setUserSelectNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGame = () => {
    setGuessRounds(0), setUserSelectNumber(null);
  };

  const gameStartHandler = selectedNumber => {
    setUserSelectNumber(selectedNumber);
  };

  const gameOverHandler = guessRounds => {
    setGuessRounds(guessRounds);
  };

  const content = userSelectNumber ? (
    guessRounds > 0 ? (
      <GameOverScreen
        userSelectNumber={userSelectNumber}
        guessRounds={guessRounds}
        configureNewGame={configureNewGame}
      />
    ) : (
      <GameScreen
        selectedNumber={userSelectNumber}
        onGameOver={gameOverHandler}
      />
    )
  ) : (
    <StartGameScreen gameStartHandler={gameStartHandler} />
  );

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
