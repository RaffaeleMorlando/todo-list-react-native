import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';
import Task from '../components/Task';

const Todo = ({ navigation }) => {

  const [task, setTask] = useState();
  const [items, setItems] = useState([]);
  const ref = useRef(0)


  const fetchData = async () => {

    const response = await fetch('http://localhost:5000/api/v1/todo');
    const data = await response.json();
    setItems(data);

  }

  const createTodo = async (task) => {
  
    const response = await fetch('http://localhost:5000/api/v1/todo/new', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
    },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({'title': task})
    })

    const data = await response.json();

    setItems([...items,data])
    ref.current++


  }

  const deleteTodo = async (id) => {
    const response =  await fetch('http://localhost:5000/api/v1/todo', {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({'_id': id})
    })

    if(response) {
      fetchData();
    }
       
  }

  useEffect(() => {

    fetchData();

  },[ref.current]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="Go to Folders"
        onPress={() => navigation.navigate('Folders')}
      />
      <View style={styles.wrapperTask}>
        <ScrollView>
          <Text style={styles.textTitle}>Today's task</Text>
          { items.length === 0 && (
            <TextInput style={styles.emptyMessage}>Non ci sono task al momento</TextInput>
          )}
          <View style={styles.itemsWrapper}>
            { items.map((item, i) => 
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(253, 0, 0, 0.44)'
                      : 'white'
                  },
                  styles.task
                ]} 
                key={i} 
                onPressOut={() => deleteTodo(item._id)}
              >
                <Task task={item}/> 
              </Pressable>
            )}
          </View>
        </ScrollView>
      </View>
        <KeyboardAvoidingView 
          behavior={(Platform.OS === 'ios') ? "padding" : null}
          style={styles.inputSection}
        >
          <TextInput
            style={styles.textInput}
            onChangeText={(text => setTask(text))}
            clearButtonMode='always'
            autoCapitalize='sentences'
          />
          { task?.length  > 0 &&
          <Pressable style={styles.btnInput} onPress={() => createTodo(task)}>
            <Text style={styles.text}>+</Text>
          </Pressable>
          }
        </KeyboardAvoidingView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapperTask: {
    paddingHorizontal: 20,
    height: '100%',
  },
  textTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemsWrapper: {},
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    minHeight: 100,
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.9,
    padding: 20,
  },
  textInput: {
    padding: 10,
    borderRadius: 20,
    width: '80%',
    backgroundColor: '#fff',
    height: 50,
    color: '#000',
    fontSize: 13,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnInput: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(85, 176, 209, 0.44)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 20,
    color: '#fff',
  },
  task: {
    marginVertical: 10,
    borderRadius: 20,
  },
  emptyMessage: {
    fontSize: 15,
    padding: 10,
  }
});

export default Todo
