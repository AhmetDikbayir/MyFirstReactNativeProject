import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Cafe from './Cafe';  
import HelloWorld from './homePage/HelloWorld';
import StyleSheetAPI from './homePage/StyleSheetAPI';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <HelloWorld/>
      <StyleSheetAPI/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
