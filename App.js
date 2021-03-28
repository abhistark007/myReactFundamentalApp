/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const name="James Bond";

const One=()=>{
  return(
    <View style={{marginVertical:30,
      paddingHorizontal:30,}}>
      <Text style={styles.text}>
      My Name is {name}
    </Text>
    </View>
  );
};

const Two=(a,b,c)=>{
  return(
    <View style={{marginVertical:30,
      paddingHorizontal:30,}}>
    <Text style={styles.text}>
    a = {a}
    </Text>
    <Text style={styles.text}>
    b = {b}
    </Text>
    <Text style={styles.text}>
    c = {c}
    </Text>
    </View>

  );
};

const Three=()=>{
  return(
    <View style={{marginVertical:30,
      paddingHorizontal:30,}}>
      <Text style={styles.text}>
      I am at AR 40 in Genshin Impact
    </Text>
    </View>
  );
};

const Four=(props)=>{
  return(
    <View style={{marginVertical:30,
      paddingHorizontal:30,}}>
      <Text style={styles.text}>
      Hello, I am {props.name}!
    </Text>
    </View>
  );
};

const Five=()=>{
  return(
    <View style={{marginVertical:30,
      paddingHorizontal:30,}}>
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}} style={{width: 200, height: 200}}>

      </Image>
      <Text style={styles.text}>My Name is naruto uzumaki and i will be the hokage believe it!!! MEOW!</Text>
    </View>
  );
};

const App=()=>{
  return(
    <ScrollView>
      <One/>
      <Text>{Two("Solo leveling","Inazuma eleven","Naruto")}</Text>
      <Three/>
      <Four name="Albedo"/>
      <Four name="Ace"/>
      <Four name="Don Lee"/>
      <Five/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
 
  text: {
    color: "green",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000000"
  }
});



export default App;
