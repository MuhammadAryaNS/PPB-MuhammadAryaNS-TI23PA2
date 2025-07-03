import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Latihan1 from "./components/Latihan1";
import Latihan2 from "./components/Latihan2";
import Latihan3 from "./components/Latihan3";
import Latihan4_RFC from "./components/Latihan4_RFC";
import Latihan4_RCC from "./components/Latihan4_RCC";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Latihan 1</Text>
      <Latihan1 />

      <Text style={styles.header}>Latihan 2</Text>
      <Latihan2 />

      <Text style={styles.header}>Latihan 3</Text>
      <Latihan3 />

      <Text style={styles.header}>Latihan 4</Text>

      <Text style={styles.subHeader}>Profile RFC</Text>
      <Latihan4_RFC />

      <Text style={styles.subHeader}>Profile RCC</Text>
      <Latihan4_RCC />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#A4D703",
    textAlign: "center",
    marginTop: 28,
    marginBottom: 8,
    borderBottomColor: "#7ED900",
    borderBottomWidth: 1,
    paddingBottom: 6,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 4,
  },
});

export default App;