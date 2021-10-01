import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../store';

export const Folder = ({ folderName, folderId }) => {
  
  const navigation = useNavigation();
  const context = useContext(Context);
  const [state, dispatch] = context;

  return (
    <View style={ styles.folder }>
      <Button title={ folderName } onPress={() => {
        dispatch({ type: 'CURRENT_FOLDER', payload: {folderName, folderId} })
        navigation?.navigate('Todo')
      }}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  folder: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 100,
    height: 100,
    borderRadius: 100,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginRight: 10,
  }
});

export default Folder
