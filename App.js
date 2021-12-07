import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Header from './components/Header'
import Posts from './components/Posts'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#7C9473'
  }
});
