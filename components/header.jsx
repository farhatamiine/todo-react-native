import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo,Foundation } from "@expo/vector-icons";

export default function Header({todoNumber}) {
  const [isDarkMode,setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>TODO - Get it Done</Text>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Foundation name="clipboard-notes" size={42} color="#ffff" />
          </View>
          <View style={styles.infoTodo}>
            <Text style={styles.iconText}>{todoNumber}</Text>
            <Text style={styles.iconText}>Done</Text>
          </View>
        </View>
        <View style={styles.iconContainer} onTouchStart={toggleSwitch}>
          <View style={isDarkMode ? styles.dark : styles.light}>
            {
              isDarkMode ?
              <Entypo name="moon" size={32} color="#ffff" />
              :
              <Entypo name="adjust" size={32} color="#FFE082" />
            }
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    marginBottom: 10,
    padding: 25,
    paddingTop:30,
    shadowColor: "#CFD8DC",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "space-between",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignSelf: "stretch",
    backgroundColor: "#7289DA",
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "900",
    color: "#ffff",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconText: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 5,
    textTransform: "capitalize",
    color: "#ffff",
    fontFamily: "sans-serif",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  dark: {
    backgroundColor: "#263238",
    margin: 10,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: 60,
    borderRadius: 60,
  },
  light: {
    backgroundColor: "#fff",
    margin: 10,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: 60,
    borderRadius: 60,
  },
  icon: {
    margin: 10,
    backgroundColor: "#000",
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: 60,
    borderRadius: 60,
  },
});
