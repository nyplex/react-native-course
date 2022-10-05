import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";

const Card = (props) => {
  return <View style={styles.inputContainer}>{props.children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    borderRadius: 10,
    backgroundColor: COLORS.primary800,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
});

export default Card;
