import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import { Card, NumberContainer } from "components";
import { BodyText, TitleText } from "components/Text";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ selectedNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, selectedNumber)
  );

  const [rounds, setRounds] = useState(1);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, selectedNumber, onGameOver]);

  const nextGuessNumber = direction => {
    if (
      (direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("Don' lie!", "You know it is not...", [
        {
          text: "Sorry!",
          style: "cancel"
        }
      ]);
      return;
    }
    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess + 1;
    }

    const nextNumber = generateRandomNumber(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(currentGuessRounds => currentGuessRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <BodyText>Rounds: {rounds}</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonConatiner}>
        <Button title="LOWER" onPress={nextGuessNumber.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessNumber.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonConatiner: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
