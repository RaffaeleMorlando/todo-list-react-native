import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Todo from './screens/Todo';
import Folders from './screens/Folders';

// ------------------------------
import Store from './store';
// ------------------------------

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Store>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Folders"
            component={Folders} 
            />
          <Stack.Screen 
            name="Todo"
            component={Todo}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Store>
  )
}

const styles = StyleSheet.create({});
