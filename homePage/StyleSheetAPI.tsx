import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function StyleSheetAPI() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
    padding: 60,
  },

  title:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightgreen',
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'pink',
  },

  lightBlueBg: {
    backgroundColor: 'lightblue',
  },

  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },


});