import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import Colors from "../constant/Colors";

const FinalScoreCalculator = () => {
    const [subject, setSubject] = useState("");
    const [assignmentScore, setAssignmentScore] = useState("");
    const [midtermScore, setMidtermScore] = useState("");
    const [finalExamScore, setFinalExamScore] = useState("");
    const [totalScore, setTotalScore] = useState(0);
    const [gradeIndex, setGradeIndex] = useState("");

    const calculateFinalScore = () => {
        const assignment = parseFloat(assignmentScore);
        const midterm = parseFloat(midtermScore);
        const finalExam = parseFloat(finalExamScore);

        if (isNaN(assignment) || isNaN(midterm) || isNaN(finalExam)) {
            alert("Scores must be valid numbers.");
            return;
        }

        const finalScore = (assignment + midterm + finalExam) / 3;
        setTotalScore(finalScore.toFixed(2));

        let gradeIndex = "";
        if (finalScore >= 80) {
            gradeIndex = "A";
        } else if (finalScore >= 73 && finalScore <= 79) {
            gradeIndex = "AB";
        } else if (finalScore >= 60 && finalScore <= 72) {
            gradeIndex = "B";
        } else {
            gradeIndex = "C";
        }

        setGradeIndex(gradeIndex);

        setSubject("");
        setAssignmentScore("");
        setMidtermScore("");
        setFinalExamScore("");
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
                <Text style={styles.title}>Final Score Calculator</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Subject"
                    value={subject}
                    onChangeText={(text) => setSubject(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Assignment Score"
                    value={assignmentScore}
                    onChangeText={(text) => setAssignmentScore(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Midterm Score"
                    value={midtermScore}
                    onChangeText={(text) => setMidtermScore(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Final Exam Score"
                    value={finalExamScore}
                    onChangeText={(text) => setFinalExamScore(text)}
                />
                <TouchableOpacity style={styles.calculateButton} onPress={calculateFinalScore}>
                    <Text style={styles.calculateButtonText}>Calculate</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.result}>Total Score: {totalScore}</Text>
            <Text style={styles.result}>Grade Index: {gradeIndex}</Text>
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
    calculateButton: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    calculateButtonText: {
        fontSize: 18,
        color: Colors.white,
    }
});

export default FinalScoreCalculator;
