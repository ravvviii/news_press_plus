

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Header from './Components/Header';
import News from './Components/News';





function App(): React.JSX.Element {

  return ( 
    <SafeAreaView style={styles.container}>
      <Header/>
      <News/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Apply a flex of 1 to the entire SafeArea View
  },
 
});

export default App;
