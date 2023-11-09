import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constant/Colors";

const GradeCalculator = () => {
    const [subject, setSubject] = useState("");
    const [creditHours, setCreditHours] = useState("");
    const [grade, setGrade] = useState("");
    const [gradesList, setGradesList] = useState([]);
    const [totalCreditHours, setTotalCreditHours] = useState(0);
    const [totalGradePoints, setTotalGradePoints] = useState(0);
    const [gpa, setGPA] = useState(0);

    const calculateGPA = () => {
        const credit = parseInt(creditHours);
        const point = calculateGradePoint(grade);

        if (isNaN(credit) || isNaN(point)) {
            alert("Credit hours and grade must be valid numbers.");
            return;
        }

        const subjectData = {
            subject,
            creditHours: credit,
            grade,
        };

        setGradesList([...gradesList, subjectData]);
        setTotalCreditHours(totalCreditHours + credit);
        setTotalGradePoints(totalGradePoints + credit * point);
        setGPA((totalGradePoints + credit * point) / (totalCreditHours + credit));
        setSubject("");
        setCreditHours("");
        setGrade("");
    };

    const calculateGradePoint = (grade) => {
        switch (grade) {
            case "A":
                return 4.0;
            case "A-":
                return 3.7;
            case "B+":
                return 3.3;
            case "B":
                return 3.0;
            case "B-":
                return 2.7;
            case "C+":
                return 2.3;
            case "C":
                return 2.0;
            case "C-":
                return 1.7;
            case "D":
                return 1.0;
            case "F":
                return 0.0;
            default:
                return NaN;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/img/logo.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>GPA Calculator</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Subject"
                    value={subject}
                    onChangeText={(text) => setSubject(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Credit Hours"
                    value={creditHours}
                    onChangeText={(text) => setCreditHours(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Grade (A, A-, B+, etc.)"
                    value={grade}
                    onChangeText={(text) => setGrade(text)}
                />
                <TouchableOpacity style={styles.loginButton} onPress={calculateGPA}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.result}>Your GPA: {gpa.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    header: {
        marginBottom: 40,
        alignItems: "center",
    },
    logo: {
        width: 130,
        resizeMode: "contain",
    },
    content: {
        backgroundColor: Colors.graySecondary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        color: Colors.white,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        color: Colors.dark,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: "center",
        color: Colors.white,
    },
    loginButton: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 18,
        color: Colors.white,
    }
});

export default GradeCalculator;
