import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */

   AsyncStorage.getAllKeys((err, keys) => {
     if (err) { console.log(err) }
     if (keys) {
       console.log(keys.length)
       if (keys.length === 0) {
         AsyncStorage.setItem("isLoggedIn", "false")
       }
     }
   })


  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text style={styles.key}>Logged In</Text>
        <Text style={styles.value}>false</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.key}>Background Color</Text>
        <Text style={styles.value}>#ffffff</Text>
      </View>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  key: {
    fontSize: 20,
    fontFamily: 'open-sans'
  },
  value: {
    fontSize: 20,
    fontFamily: 'space-mono',
  }
});
