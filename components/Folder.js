import React, { useContext } from 'react';
import { View, StyleSheet, Pressable, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../store';
import { Swipeable } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

export const Folder = ({ folderName, folderId }) => {
  
  const navigation = useNavigation();
  const context = useContext(Context);
  const [state, dispatch] = context;

  const deleteFolder = async (id) => {
    const response = await fetch('http://localhost:5000/api/v1/folder', {
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

    if(response) dispatch({ type: 'DELETE_FOLDER', payload: folderId })
  }

  const renderRightActions = (
    progress: Animated.AnimatedAnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation,
  ) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.swipedRow}>
        <View style={styles.swipedConfirmationContainer}>
          <Text style={styles.deleteConfirmationText}>Are you sure?</Text>
        </View>
        <Animated.View style={[styles.deleteButton, {opacity}]}>
          <Pressable 
            onPress={() => deleteFolder(folderId)}
          >
            <Text style={styles.deleteButtonText}><Icon name="delete" /></Text>
          </Pressable>
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={ renderRightActions }>
      <View style={ styles.folder }>
        <Pressable style={ styles.folderWrapper }  
        onPress={() => {
          dispatch({ type: 'CURRENT_FOLDER', payload: { folderName, folderId }})
          navigation?.navigate('Todo')
        }}>
          <Text style={ styles.folderTitle }>{ folderName }</Text>
        </Pressable>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  folder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 20,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  folderWrapper: {
   width: '100%',
   height: '100%',
   justifyContent: 'center',
  },
  folderTitle: {
    fontSize: 22,
  },
  deleteConfirmationText: {
    color: '#fcfcfc',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#b60000',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 3,
  },
});

export default Folder
