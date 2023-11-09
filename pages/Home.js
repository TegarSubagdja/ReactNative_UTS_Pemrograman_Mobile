import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Image, ScrollView } from "react-native";

import Card from "../components/Card";
import TextLink from "../components/TextLink";
import Colors from "../constant/Colors";

const Home = ({ navigation }) => {
  const data = ["Home", "Calculator", "Bmi", "Chart", "Pair", "Profile", "IndexNilai"];
  const [activeLink, setActiveLink] = useState("Home");

  const renderItem = ({ item }) => {
    return (
      <TextLink
        text={item}
        style={item === activeLink ? styles.textActive : null}
        onPress={() => navigation.navigate(item)}
      />
    );
  };

  const renderCard = () => (
    <Card />
  );

  return (
    <View style={styles.container}>
      <View style={styles.body}>

        {/* Bagian Heading logo dan Profile */}
        <View style={styles.heading}>
          <Image
            source={require("../assets/img/logo.png")}
            style={styles.logo}
          />
          <Image source={require("../assets/img/Profile.png")} />
        </View>
        {/* Bagian Menu */}
        <View style={styles.textNav}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.textLinksContainer}
          />
        </View>
        <ScrollView>
          {/* Bagian Flatlist */}
          <View>
            <FlatList
              horizontal
              data={data}
              renderItem={renderCard}
            />
          </View>
          {/* Bagian Topik */}
          <View style={{ marginTop: 15, flexDirection: "column" }}>
            <Text style={{ color: Colors.white, fontSize: 24 }}>
              Top Picks
            </Text>

            <Text style={{ color: Colors.grayLight }}>
              Let's explore our programs
            </Text>

            <View style={{
              marginTop: 15,
              width: "100%",
              height: "auto",
              paddingVertical: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.graySecondary,
            }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../assets/img/react.png")}
                  style={{ height: 80, resizeMode: "contain" }}
                />
              </View>
              <View style={{ flex: 2, flexDirection: "column", marginRight: 15 }}>
                <Text style={{ color: Colors.white, fontSize: 24, borderBottomWidth: 1, borderBottomColor: Colors.primary, paddingVertical: 10, marginBottom: 10 }}>React Native</Text>
                <Text style={{ color: Colors.grayLight }}>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces</Text>
              </View>
            </View>

            <View style={{
              marginTop: 15,
              width: "100%",
              height: "auto",
              paddingVertical: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.graySecondary,
            }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../assets/img/laravel.png")}
                  style={{ height: 80, resizeMode: "contain" }}
                />
              </View>
              <View style={{ flex: 2, flexDirection: "column", marginRight: 15 }}>
                <Text style={{ color: Colors.white, fontSize: 24, borderBottomWidth: 1, borderBottomColor: Colors.primary, paddingVertical: 10, marginBottom: 10 }}>Laravel</Text>
                <Text style={{ color: Colors.grayLight }}>Laravel is a web application framework with expressive, elegant syntax</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.dark
  },
  body: {
    flex: 1,
  },
  textNav: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: Colors.graySecondary,
  },
  textLinksContainer: {
    flexGrow: 1,
  },
  textActive: {
    borderBottomWidth: 2,
    borderColor: Colors.primary,
  },
  heading: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: 130,
    resizeMode: "contain"
  }
});

export default Home;
