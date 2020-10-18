import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddTodo({ submitTodo }) {
  const [mainText, setMainText] = useState();
  const [text, setText] = useState();
  const changeMainHandler = (val) => {
    setMainText(val);
  };

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={style.modal}>
        <Text style={{color:'#000'}}>Add new Todo</Text>
      <View style={style.modalContainer}>
        <TextInput
          style={style.input}
          placeholder="Main text"
          onChangeText={changeMainHandler}
        />
        <TextInput
          style={style.input}
          placeholder="Secondary Text"
          onChangeText={changeHandler}
        />
        <TouchableOpacity
          style={style.button}
          onPress={() => submitTodo(mainText, text)}
        >
          <Text style={style.buttonText}>Add new Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  modal: {
    margin: 20,
    borderRadius: 20,
    padding: 15,
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height:300,
    backgroundColor:'#ffffff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContainer: {
  },
  input: {
    borderWidth: 2,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#7289da",
    borderRadius: 3,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#7289DA",
    height: 40,
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "900",
    fontSize: 15,
  },
});
