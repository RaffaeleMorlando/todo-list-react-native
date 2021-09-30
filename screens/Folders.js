import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Folder from '../components/Folder'
import dataFolder from '../folderTest/dataFolder';

export default function Folders() {
  return (
    <View style={styles.container}>
      <View >
        <ScrollView >
          <View style={styles.foldersWrapper}>
            { dataFolder.map((folder, i) => 
              <Folder 
                key={ i }
                folderName={ folder.folderName }
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D34E24',
  },
  foldersWrapper: {
    padding: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 30,
  },
});