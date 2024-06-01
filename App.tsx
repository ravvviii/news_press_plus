

import React from 'react';
import {
  StyleSheet
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Details from './Components/Details';
import News from './Components/News';



const Stack = createNativeStackNavigator();



function App(): React.JSX.Element {

  return ( 


    <GestureHandlerRootView>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>

          <Stack.Screen 
          name='Main'
          component={News}
          options={{
            title:"PressPlus",
            headerStyle: {
              backgroundColor: "#FF9F01",
            },
          }}
          
          
          />
          <Stack.Screen 
          name='Details'
          component={Details}
          options={{
            title:"News Details",
            
            headerStyle: {
              backgroundColor: "#FF9F01",
            },
          }}
          
          
          />

        </Stack.Navigator>
    </NavigationContainer>
</GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  
 
});

export default App;
