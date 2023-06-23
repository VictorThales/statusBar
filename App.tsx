/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Appearance,
  Button,
  ColorSchemeName,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme
} from 'react-native';

import Colors from './colors';

function App(): JSX.Element {
  const schemeColor: ColorSchemeName[] = ["light","dark"]

  const changeStatusBarColor = () => {
      const currentScheme = Appearance.getColorScheme();
      const nextScheme = schemeColor.find((value) => value !== currentScheme);
      if (nextScheme) {
        Appearance.setColorScheme(nextScheme);
      }
  }

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: !isDarkMode ? Colors.lightBar : Colors.darkBar,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
       
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <View style={styles.picContainer}>
              <Image style={{...styles.image,borderColor: !isDarkMode ? 'white' : 'black'}} source={{'uri': 'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg'}}/>
            </View>
            <Button color={isDarkMode ? Colors.lightBar : Colors.darkBar} title='Change Status bar color' onPress={()=>changeStatusBarColor()}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  picContainer: {
    flex:1,
    width: '90%',
    height: 300,
    alignSelf:'center',
  },
  image: {
    borderRadius:25,
    width: '100%',
    height:'100%',
  }
});

export default App;
