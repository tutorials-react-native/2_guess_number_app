import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as Fonts from "expo-font";
import { AppLoading } from "expo";

import Header from "components/Header";
import { StartGameScreen, GameScreen, GameOverScreen } from "screens";

const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf")
  });
};

export default function App() {
  const [userSelectNumber, setUserSelectNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

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
    <SafeAreaView style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
