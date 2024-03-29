import { Text, StyleSheet } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    marginTop: 50,
  },
});

export default Title;
