import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import Colors from "../constant/Colors";

const Card = () => {
    return (
        <View style={styles.card} >
            <View style={styles.innerCard}>
                <Image
                    source={require('../assets/img/imageCard.png')}
                    style={styles.image}
                />
                <View style={styles.desc}>
                    <View style={styles.descName}>
                        <View style={styles.name}>
                            <Text style={styles.textName}>Karafuru</Text>
                            <Image
                                source={require('../assets/img/checklist.png')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.name}>
                            <Image
                                source={require('../assets/img/love.png')}
                                style={styles.image}
                            />
                            <Text style={styles.textName}>15</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textSince}>
                            Mosu #21169
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.graySecondary,
        width: 157,
        height: 230,
        borderRadius: 10,
        alignItems: "center",
        marginRight: 10
    },
    innerCard: {
        margin: 15,
        flexDirection: "column",
    },
    image: {
        borderRadius: 10,
    },
    name: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    textName: {
        color: Colors.grayLight,
    },
    textSince: {
        color: Colors.white,
    },
    desc: {
        marginVertical: 10,
        gap: 5
    },
    descName: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default Card;
