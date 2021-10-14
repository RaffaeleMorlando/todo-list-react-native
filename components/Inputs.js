import React, { useState, useRef } from 'react';
import { StyleSheet, KeyboardAvoidingView, Pressable, TextInput, Text, InputAccessoryView } from 'react-native';


// import { Button, InputAccessoryView, ScrollView, TextInput, StyleSheet, View , Pressable, Text, KeyboardAvoidingView} from 'react-native';


const Inputs = ({ action }) => {

  const [textInput, setTextInput] = useState();
  const inputAccessoryViewID = 'uniqueID';



  // const initialText = '';
  // const [text, setText] = useState(initialText);
  // const [keyboardState, setKeyboardSate] = useState(false);
  // const inputRef = useRef(null)

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
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Pressable
          onPress={() => setText(initialText)}
          title="Clear text"
        />
      </InputAccessoryView>
    </KeyboardAvoidingView>

  // <>
  //   <KeyboardAvoidingView 
  //     behavior={(Platform.OS === 'ios') ? "padding" : null}
  //     style={styles.inputSection}
  //   >
      
  //     <InputAccessoryView nativeID={inputAccessoryViewID}>
  //     <ScrollView keyboardDismissMode="interactive">
  //       <View style={styles.upperKeyboard} >
  //         <TextInput
  //           style={{
  //             padding: 16,
  //             marginTop: 50,
  //           }}
  //           inputAccessoryViewID={inputAccessoryViewID}
  //           onChangeText={setText}
  //           value={text}
  //           placeholder={'Please type here…'}
  //           ref={inputRef}
  //         />
  //       </View>
  //     </ScrollView>
  //     </InputAccessoryView>
  //     <Pressable style={styles.btnInput} onPress={() => inputRef.current.focus()}>
  //       <Text style={styles.text}>+</Text>
  //     </Pressable>
  //   </KeyboardAvoidingView>
  // </>
  );
}

const styles = StyleSheet.create({
  upperKeyboard: {
    width: 500,
    height: 200,
    backgroundColor: 'lightblue',
  },
  inputSection: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
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
