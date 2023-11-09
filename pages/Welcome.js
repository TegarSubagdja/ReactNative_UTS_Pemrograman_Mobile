import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require("../assets/img/logo.png")}
                    style={styles.logo}
                />
                <View style={{
                    position: "absolute",
                    transform: [{ translateX: -100 }, { translateY: -100 }],
                    width: 300,
                    height: 300,
                    borderRadius: 300,
                    borderWidth: 2,
                    borderColor: Colors.graySecondary,
                    backgroundColor: 'transparent',
                }}></View>
                <View style={{
                    position: "absolute",
                    transform: [{ translateX: -70 }, { translateY: -150 }],
                    width: 300,
                    height: 300,
                    borderRadius: 300,
                    borderWidth: 2,
                    borderColor: Colors.primary,
                    backgroundColor: 'transparent',
                }}></View>
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>
                    Welcome to My Mobile Project
                </Text>
                <Text style={styles.desc}>
                    Aplikasi ini dibuat untuk memenuhi nilai UTS Pemrograman Mobile
                </Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.loginButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    logo: {
        width: 130,
        resizeMode: "contain",
    },
    field: {
        justifyContent: "flex-end",
    },
    text: {
        fontSize: 34,
        color: Colors.white,
    },
    desc: {
        color: Colors.grayLight,
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 50
    },
    loginButtonText: {
        fontSize: 18,
        color: Colors.white,
    },
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: Colors.dark
    }
})