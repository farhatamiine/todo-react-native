import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function TodoCard({ id,text, icon, secondText,handleDelete}) {
 
  return (
    <TouchableOpacity onPress={() => handleDelete(id)} style={styles.card}>
      <View style={styles.iconContainer}>
        <Entypo name={icon} size={32} color="#ffff" />
      </View>
      <View style={styles.infoContainer}>       
          <Text style={styles.cardText}>{text}</Text>
          <Text style={styles.cardSecondText}>{secondText}</Text>
      </View>
    </TouchableOpacity>
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
    marginLeft:5,
    justifyContent:'center',
    alignItems:'flex-start',
    alignSelf:"stretch"
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
