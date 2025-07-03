import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Latihan1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>History of Bicycle</Text>
        <Text style={styles.paragraph}>
          A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a 
          human-powered or motor-powered assisted, pedal-driven, single-track vehicle.
        </Text>
      </View>

      <View style={styles.imageBox}>
        <Image
          source={{ uri: "https://www.shutterstock.com/image-vector/bmx-bike-tshirt-design-vector-600nw-2312634381.jpg" }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textBox: {
    width: "85%",
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F1F1F",
    backgroundColor: "#7ED900",
    textAlign: "center",
    paddingVertical: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -16,
    marginHorizontal: -16,
  },
  paragraph: {
    fontSize: 14,
    color: "#CCCCCC",
    textAlign: "center",
    marginTop: 14,
  },
  imageBox: {
    marginTop: 25,
    width: 125,
    height: 125,
    backgroundColor: "#A4D703",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});

export default Latihan1;