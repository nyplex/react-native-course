import React from "react";
import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

const InstructionText = (props) => {
  return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: COLORS.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
