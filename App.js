import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import Task from './components/Task';

export default function App() {

const [task, setTask] = useState();
const [items, setItems] = useState([
  'Task-1',
  'Task-2',
  'Task-3',
]);

const addTask = () => {
  setItems([...items,task])
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapperTask}>
        <Text style={styles.textTitle}>Today's task</Text>
        <View style={styles.itemsWrapper}>
          {items.map((item, i) => <Task text={item} key={i}/> )}
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={(Platform.OS === 'ios') ? "padding" : null}
        style={styles.inputSection}
      >
        <TextInput
          style={styles.textInput}
          onChangeText={(text => setTask(text))}
        />
        <Text
          style={styles.btnInput}
          onPress={() => addTask()}
        >+</Text>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8c8e3',
  },
  wrapperTask: {
    paddingTop: 80,
    paddingHorizontal: 20,
    height: '100%',
  },
  textTitle: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  itemsWrapper: {},
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 60,
    padding: 20,
    width: '100%',
  },
  textInput: {
    padding: 10,
    borderRadius: 20,
    width: '80%',
    backgroundColor: '#fff',
  },
  btnInput: {
    width: '10%',
    height: '100%',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: '#fff',
    overflow: 'hidden'
  }
});
