import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Latihan4RCC extends Component {
  constructor() {
    super();
    this.state = {
      identity: {
        npm: "232310013",
        firstname: "Muhammad",
        middlename: "Arya",
        lastname: "Nur Sabilillah",
      },
      educationList: [
        { id: 1, school: "SDN BaranangSiang Kota Bogor" },
        { id: 2, school: "SMP PGRI 2 Kota Bogor" },
        { id: 3, school: "SMKN Pembangunan Kota Bogor" },
      ],
      phone: "0895355327376",
      email: "232310013@student.ibik.ac.id",
      gender: "L",
      height: 175,
      weight: 63,
    };
  }

  render() {
    const { identity, educationList, phone, email, gender, height, weight } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BIODATA</Text>
        <Text style={styles.text}>NPM : {identity.npm}</Text>
        <Text style={styles.text}>Nama : {identity.firstname} {identity.middlename} {identity.lastname}</Text>
        <Text style={styles.text}>Email : {email}</Text>
        <Text style={styles.text}>Telepon : {phone}</Text>
        <Text style={styles.text}>Jenis Kelamin : {gender}</Text>
        <Text style={styles.text}>Tinggi Badan : {height} cm</Text>
        <Text style={styles.text}>Berat Badan : {weight} kg</Text>

        <Text style={styles.title}>PENDIDIKAN</Text>
        {educationList.map((item) => (
          <Text key={item.id} style={styles.text}>• {item.school}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7ED900",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#CCCCCC",
    marginTop: 5,
  },
});

export default Latihan4RCC;
