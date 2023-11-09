import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Colors from "../constant/Colors";

const Bmi = () => {
    const [beratBadan, setBeratBadan] = useState("");
    const [tinggiBadan, setTinggiBadan] = useState("");
    const [selectedGender, setSelectedGender] = useState("");

    const calculateBMI = () => {
        // Logika perhitungan BMI
        const bmi = (parseFloat(beratBadan) / ((parseFloat(tinggiBadan) / 100) ** 2)).toFixed(2);
        return bmi;
    };

    const handleGenderPress = (gender) => {
        setSelectedGender(gender);
    };

    return (
        <View style={styles.container}>
            {/* Heading */}
            <View style={styles.heading}>
                <Text style={styles.h1}>BMI</Text>
            </View>
            {/* Male and Female */}
            <View style={styles.gender}>
                <TouchableOpacity
                    style={[styles.male, selectedGender === "male" && { backgroundColor: Colors.primary }]}
                    onPress={() => handleGenderPress("male")}
                >
                    <Image source={require("../assets/img/Male.png")} />
                    <Text style={[styles.h2, selectedGender === "male" && { color: Colors.white }]}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.female, selectedGender === "female" && { backgroundColor: Colors.primary }]}
                    onPress={() => handleGenderPress("female")}
                >
                    <Image source={require("../assets/img/Female.png")} />
                    <Text style={[styles.h2, selectedGender === "female" && { color: Colors.white }]}>Female</Text>
                </TouchableOpacity>
            </View>
            {/* Input Data */}
            <View style={styles.areaField}>
                <View style={styles.field}>
                    <View style={styles.capt}>
                        <Image source={require("../assets/img/Weight.png")} resizeMode="contain" style={styles.image} />
                        <Text style={styles.h2}>Berat</Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Masukkan berat badan"
                        placeholderTextColor={Colors.grayLight}
                        keyboardType="numeric"
                        onChangeText={(text) => setBeratBadan(text)}
                    />
                </View>
                <View style={styles.field}>
                    <View style={styles.capt}>
                        <Image source={require("../assets/img/height.png")} resizeMode="contain" style={styles.image} />
                        <Text style={styles.h2}>Tinggi</Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Masukkan tinggi badan"
                        placeholderTextColor={Colors.grayLight}
                        keyboardType="numeric"
                        onChangeText={(text) => setTinggiBadan(text)}
                    />
                </View>
            </View>
            {/* Area Output */}
            <View>
                <Text>Hasil</Text>
                <View style={styles.output}>
                    <Text style={styles.h3}>Berat Badan</Text>
                    <Text style={styles.h3}>{beratBadan}</Text>
                </View>
                <View style={styles.output}>
                    <Text style={styles.h3}>Tinggi Badan</Text>
                    <Text style={styles.h3}>{tinggiBadan}</Text>
                </View>
                <View style={[styles.output, styles.bmi]}>
                    <Text style={styles.h2}>Body Mass Index</Text>
                    <Text style={styles.h2}>{calculateBMI()}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
        backgroundColor: Colors.dark
    },
    h1: {
        color: Colors.white,
        fontSize: 30
    },
    heading: {
        justifyContent: "center",
        alignItems: "center"
    },
    gender: {
        flexDirection: "row",
        gap: 20,
        marginVertical: 40,
    },
    male: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    female: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.graySecondary,
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    h2: {
        color: Colors.white,
        fontSize: 16,
    },
    h3: {
        color: Colors.grayLight,
        fontSize: 14,
    },
    capt: {
        width: 100,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: Colors.graySecondary,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    field: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    image: {
        width: 20,
    },
    areaField: {
        gap: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.graySecondary,
    },
    output: {
        flexDirection: "row",
        paddingBottom: 10,
        justifyContent: "space-between",
    },
    bmi: {
        paddingVertical: 20
    },
    textInput: {
        backgroundColor: Colors.graySecondary,
        borderRadius: 8,
        padding: 12,
        color: Colors.grayLight,
        height: "100%",
    },
    male: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.graySecondary,
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    female: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.graySecondary,
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Bmi;
