import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Latihan4RFC = () => {
  const [bio] = useState({
    identity: {
      npm: "232310013",
      firstname: "Muhammad",
      middlename: "Arya",
      lastname: "Nur Sabilillah",
    },
    educations: [
      { id: 1, school: "SDN BaranangSiang Kota Bogor" },
      { id: 2, school: "SMP PGRI 2 Kota Bogor" },
      { id: 3, school: "SMK Pembangunan Kota Bogor" },
    ],
    phone: "0895355327376",
    email: "232310013@student.ibik.ac.id",
    gender: "L",
    height: 175,
    weight: 63,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIODATA</Text>
      <Text style={styles.text}>NPM : {bio.identity.npm}</Text>
      <Text style={styles.text}>Nama : {bio.identity.firstname} {bio.identity.middlename} {bio.identity.lastname}</Text>
      <Text style={styles.text}>Email : {bio.email}</Text>
      <Text style={styles.text}>Telepon : {bio.phone}</Text>
      <Text style={styles.text}>Jenis Kelamin : {bio.gender}</Text>
      <Text style={styles.text}>Tinggi Badan : {bio.height} cm</Text>
      <Text style={styles.text}>Berat Badan : {bio.weight} kg</Text>

      <Text style={styles.title}>PENDIDIKAN</Text>
      {bio.educations.map((item) => (
        <Text key={item.id} style={styles.text}>• {item.school}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A4D703",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#CCCCCC",
    marginTop: 5,
  },
});

export default Latihan4RFC;
