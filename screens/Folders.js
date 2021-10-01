import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Folder from '../components/Folder'
// import dataFolder from '../folderTest/dataFolder';
import Inputs from '../components/Inputs';

export default function Folders() {

  const [folders, setFolders] = useState([]);
  const ref = useRef(0)

  const getFolders =  async () => {

    const response = await fetch('http://localhost:5000/api/v1/folder');
    const folders = await response.json();

    if(folders) {
      setFolders(folders);
    }

  }

  const createfolder = async (name) => {
    const response = await fetch('http://localhost:5000/api/v1/folder/new', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
    },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({'folder_name': name})
    })

    const data = await response.json();

    setFolders([...folders,data])
    ref.current++
  }

  useEffect(() => {

   getFolders();

  }, [ref.current]);

  return (
    <View style={styles.container}>
      <View >
        <ScrollView >
          <View style={styles.foldersWrapper}>
            { folders.map((folder, i) => 
              <Folder 
                key={ folder._id }
                folderName={ folder.folder_name }
              />
            )}
          </View>
        </ScrollView>
      </View> 
      <Inputs  action={createfolder}/>
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