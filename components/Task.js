import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Task = ({text}) => {

  return (
    <View style={styles.task}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.squareLeft} />
        <Text style={styles.task}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    padding: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
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
  }
})

export default Task
