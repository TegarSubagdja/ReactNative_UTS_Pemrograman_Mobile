import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constant/Colors";

const TextLink = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.text, style]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: Colors.grayLight, 
        padding: 20
    },
});

export default TextLink;
