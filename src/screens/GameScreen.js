import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Card, NumberContainer } from "components";
import { BodyText, TitleText } from "components/Text";
import { MainButton } from "components/Button";

const isBigHeight = Dimensions.get("window").height > 600;

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

const renderListItem = (guessLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{guessLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = ({ selectedNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      onGameOver(pastGuesses.length);
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
    setPastGuesses(curPastGuess => [nextNumber, ...curPastGuess]);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <BodyText>Rounds: {pastGuesses.length}</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonConatiner}>
        <MainButton onPress={nextGuessNumber.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessNumber.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    marginTop: isBigHeight ? 20 : 5,
    width: 400,
    maxWidth: "90%"
  },
  listContainer: {
    flex: 1,
    width: isBigHeight ? "60%" : "80%"
  },
  list: {
    // alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    width: "100%"
  }
});

export default GameScreen;
