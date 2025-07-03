import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";

const Latihan3 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png",
        }}
        style={styles.logo}
      />

      <ActivityIndicator size="large" color="#FFFFFF" style={styles.spinner} />

      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a0080",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  spinner: {
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: "#FFFFFF",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
  },
});

export default Latihan3;