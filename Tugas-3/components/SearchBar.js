import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Cari pengguna..."
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 42,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#1e1e1e",
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
  },
});

export default SearchBar;