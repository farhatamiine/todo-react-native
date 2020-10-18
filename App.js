import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/header';
import { FloatingAction } from "react-native-floating-action";
import TodoCard from './components/todo-card';
import Modal from 'react-native-modal';




export default function App() {

  const actions = [
    {
      text: "Add Todo",
      icon: require("./assets/note.png"),
      name: "bt_accessibility",
      position: 2
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [todos,setTodos] = useState([
    {
      id:"1",
      icon:'app-store',
      text:'stay healty',
      secondText:'eat an apple per day'
    },
    {
      id:"2",
      icon:'cup',
      text:'Drink cup of water',
      secondText:'Stay hydrated'
    },
    {
      id:"3",
      icon:'baidu',
      text:'Walk in the park',
      secondText:'take the dog for a walk'
    },
    {
      id:"4",
      icon:'book',
      text:'Feed your brain',
      secondText:'Read a book'
    },
  ]);
  
  const pressToDelete = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.id != key);
    })
  }

  const submitTodo = (text,secondText) =>{
      setTodos((prevTodo) =>{
          return [
            {text:text,secondText:secondText,icon:'cup',id:Math.random().toString()},
            ...prevTodo
          ]
      });
      setModalVisible(!modalVisible);
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#CFD7F2"/>
      <Header todoNumber={todos.length}/>
      <View style={styles.mainContainer}>
         <Modal isVisible={modalVisible}>
          <AddTodo  submitTodo={submitTodo}/>
        </Modal>
        <FlatList style={styles.list} data={todos} renderItem={({item}) => 
        <TodoCard id={item.id} handleDelete={pressToDelete} text={item.text} secondText={item.secondText} icon={item.icon} />
        }/>
      </View>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          switch (name) {
            case 'bt_accessibility':
              setModalVisible(true);
              break;
          
            default:
              break;
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
 
  mainContainer:{
    flex: 1,
    alignItems: 'center',
    paddingHorizontal:10,
    alignSelf:'stretch',
    justifyContent: 'flex-start',
  },
  list:{
    alignSelf:'stretch',
  },
  forms:{
    backgroundColor:'#ffff',
    alignSelf:'stretch',
    padding:20
  }

});
