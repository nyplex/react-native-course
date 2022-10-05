import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: COLORS.accent500,
        fontFamily: "open-sans-bold",
        fontSize: deviceWidth < 380 ? 28 : 36,
    },
});

export default NumberContainer;
