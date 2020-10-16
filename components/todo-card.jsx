import React, { Component, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function TodoCard({ text, icon, secondText }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Entypo name={icon} size={32} color="#ffff" />
      </View>
      <View style={styles.infoContainer}>
        <View  style={styles.textContainer}>
          <Text style={styles.cardText}>{text}</Text>
          <Text style={styles.cardSecondText}>{secondText}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#ECEFF1", true: "#7289DA" }}
            thumbColor="#7289DA"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 80,
    padding: 10,
    alignSelf: "stretch",
    borderRadius: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center",
    
  },
  iconContainer: {
    margin: 10,
    flex:2,
    backgroundColor: "#7289DA",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: 50,
    borderRadius: 50,
  },
  infoContainer:{
    flex:8,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    alignSelf:"stretch"
  },
  switchContainer: {
   alignItems:'center',
  },
  cardText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  secondText: {
    color: "#F5F5F5",
    fontWeight: "200",
  },
});
