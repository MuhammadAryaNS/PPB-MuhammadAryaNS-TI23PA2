import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const UserItem = ({ item }) => {
  const imgSrc =
    item.gender === "M"
      ? "https://i.pravatar.cc/150?img=4"
      : "https://i.pravatar.cc/150?img=9";

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Image source={{ uri: imgSrc }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.fullname}>{item.fullname}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.followBtn}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#121212",
    borderRadius: 8,
    marginBottom: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 14,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  fullname: {
    color: "#999",
    fontSize: 14,
  },
  followBtn: {
    backgroundColor: "#405DE6",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  followText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UserItem;