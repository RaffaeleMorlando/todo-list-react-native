import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'

const Task = ({task}) => {

  return (
    <View style={styles.task}>
      <View style={styles.itemLeft}>
        <Pressable style={styles.squareLeft} />
        {/* MONGODB */}
        {/* <Text style={styles.taskTitle}>{ task.title }</Text> */}

        {/* MYSQL */}
        <Text style={styles.taskTitle}>{ task.todo_name }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    padding: 20,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 20,
    color: '#000',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  squareLeft: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#299f',
    opacity: 0.5,
  },
  taskTitle: {
    marginLeft: 20,
    fontSize: 18,
  }
})

export default Task
