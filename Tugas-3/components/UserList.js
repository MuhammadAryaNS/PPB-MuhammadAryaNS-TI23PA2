import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ExpScrollView from "./ExpScrollView";
import UserItem from "./UserItem";
import Users from "./Users";

const UserList = () => {
  const [query, setQuery] = useState("");

  const results = Users.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.fullname.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.wrapper}>
      <Header title="Daftar Pengguna" />
      <ExpScrollView>
        <SearchBar value={query} onChange={setQuery} />
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UserItem item={item} />}
        />
      </ExpScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default UserList;