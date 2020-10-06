import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import TicTacToe from './src/pages/TicTacToe';
import { ThemeProvider } from "styled-components";
import lightTheme from "./src/themes/light";
import darkTheme from "./src/themes/dark";

const Stack = createStackNavigator();

export default function App() {
  const [selectMode, setSelectedMode] = useState(1);

  return (
    <ThemeProvider theme={selectMode === 0 ? lightTheme : darkTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='TicTacToe' component={TicTacToe} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
