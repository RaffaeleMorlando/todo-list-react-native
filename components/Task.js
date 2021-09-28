import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'

const Task = ({text}) => {

  return (
    <View style={styles.task}>
      <View style={styles.itemLeft}>
        <Pressable style={styles.squareLeft} />
        <Text style={styles.task}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 20,
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
