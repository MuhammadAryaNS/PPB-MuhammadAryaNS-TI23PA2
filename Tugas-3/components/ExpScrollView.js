import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const ExpScrollView = ({ children }) => {
  return <ScrollView contentContainerStyle={styles.scroll}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
});

export default ExpScrollView;