import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export const Folder = ({folderName}, {navigation}) => {
    return (
      <View style={styles.folder}>
        {/* <Text >{ folderName }</Text> */}
        <Button title={folderName} onPress={() => navigation.navigate('Todo')}></Button>
      </View>
    )
}

const styles = StyleSheet.create({
  folder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
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
