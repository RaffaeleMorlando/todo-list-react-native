import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Pressable, TextInput, Text } from 'react-native';

const Inputs = ({ action }) => {

  const [textInput, setTextInput] = useState();

  return (
    <KeyboardAvoidingView 
      behavior={(Platform.OS === 'ios') ? "padding" : null}
      style={styles.inputSection}
    >
      <TextInput
        style={styles.textInput}
        onChangeText={(text => setTextInput(text))}
        clearButtonMode='always'
        autoCapitalize='sentences'
      />
      <Pressable style={styles.btnInput} onPress={() => action(textInput)}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
})

export default Inputs;
