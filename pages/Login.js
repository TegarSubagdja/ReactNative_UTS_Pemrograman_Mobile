import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constant/Colors";

const Login = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/img/logo.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.container}>

                <View style={styles.content}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        justifyContent: "flex-end",
    },
    header: {
        marginBottom: 40,
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

export default Login;
