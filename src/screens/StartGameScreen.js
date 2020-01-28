import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions
} from "react-native";

import Color from "color";
import { Card, Input, NumberContainer } from "components";
import { TitleText, BodyText } from "components/Text";
import { MainButton } from "components/Button";

const StartGameScreen = ({ gameStartHandler }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setIsConfirmed(false);
    setSelectedNumber("");
    Keyboard.dismiss();
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a nuumber between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setIsConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start New Game</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Color.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Color.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {isConfirmed ? (
          <Card style={styles.selectedNumberContainer}>
            <BodyText>You selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton
              onPress={() => {
                gameStartHandler(selectedNumber);
              }}
            >
              StartGame
            </MainButton>
          </Card>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: Dimensions.get("window").width / 3
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  selectedNumberContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
});

export default StartGameScreen;
