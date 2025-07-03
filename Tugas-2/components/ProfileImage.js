import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfileImage = () => {
  return (
    <View style={styles.imageBox}>
      <Image
        source={{ uri: "https://www.shutterstock.com/image-vector/bmx-bike-tshirt-design-vector-600nw-2312634381.jpg" }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    marginTop: 20,
    width: 125,
    height: 125,
    backgroundColor: "#90caf9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});

export default ProfileImage;