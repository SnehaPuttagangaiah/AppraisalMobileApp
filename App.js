import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import IntroPage from './src/screens/Intro/IntroPage';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  const [introShown, setIntroShown] = useState(false);
  // Function to mark the intro as shown
  const markIntroAsShown = () => {
    setIntroShown(true);
  };
  // Render the IntroPage or StackNavigator based on the state
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        hidden={true} // Set to true to hide the status bar
      />

      <NavigationContainer>
        {introShown ? (
          <StackNavigator />
        ) : (
          <IntroPage markIntroAsShown={markIntroAsShown} />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
