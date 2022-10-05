import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 8,
    borderColor: 'blue',
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
