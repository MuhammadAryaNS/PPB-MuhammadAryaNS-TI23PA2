import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MyProfile = () => {
    const types = {
        nomor: "232310013",
        jurusan: "S1 Teknologi Informasi",
        Univ: "Institut Bisnis Informatika Kesatuan",
        keahlian: "Desain UI/UX",
        Organisasi: "UKM Futsal IBI Kesatuan & UKM Harmoni Penggiat Seni",
        hobi: "Futsal & Musik Band",
        telp: "0895355327376",
        email: "nrsbllh@gmail.com",
        ig: "nrsbllh_",
        tt: "nrsbllh_"
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MY PROFILE</Text>

            <View style={styles.card}>
                <Text style={styles.item}><Text style={styles.label}>Nama Lengkap : </Text>Muhammad Arya Nur Sabilillah</Text>
                <Text style={styles.item}><Text style={styles.label}>NIM : </Text>{types.nomor}</Text>
                <Text style={styles.item}><Text style={styles.label}>Program Studi : </Text>{types.jurusan}</Text>
                <Text style={styles.item}><Text style={styles.label}>Universitas : </Text>{types.Univ}</Text>
                <Text style={styles.item}><Text style={styles.label}>Keahlian/Minat : </Text>{types.keahlian}</Text>
                <Text style={styles.item}><Text style={styles.label}>Organisasi : </Text>{types.Organisasi}</Text>
                <Text style={styles.item}><Text style={styles.label}>Hobi : </Text>{types.hobi}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>KONTAK & MEDIA SOSIAL</Text>
                <Text style={styles.item}><Text style={styles.label}>Telepon : </Text>{types.telp}</Text>
                <Text style={styles.item}><Text style={styles.label}>Email : </Text>{types.email}</Text>
                <Text style={styles.item}><Text style={styles.label}>Instagram : </Text>@{types.ig}</Text>
                <Text style={styles.item}><Text style={styles.label}>Tiktok : </Text>@{types.tt}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#C6F000',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        borderColor: '#3A7700',
        borderWidth: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C6F000',
        marginBottom: 12,
        textAlign: 'center',
    },
    item: {
        fontSize: 16,
        marginBottom: 8,
        color: '#FFFFFF',
    },
    label: {
        fontWeight: 'bold',
        color: '#C6F000',
    }
});

export default MyProfile;
