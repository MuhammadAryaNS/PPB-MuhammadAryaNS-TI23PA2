import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HistoryText from "../components/HistoryText";
import ProfileImage from "../components/ProfileImage";

class Latihan2 extends Component {
  render() {
    return (
      <View style={layout.screen}>
        <HistoryText />
        <ProfileImage />
      </View>
    );
  }
}

const layout = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Latihan2;
