import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    paddingVertical: 24,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#333",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
});

export default Header;