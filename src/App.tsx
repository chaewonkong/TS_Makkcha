import React from 'react'
import { View, SafeAreaView, Platform, Text, StatusBar } from 'react-native'
import MainList from "./components/MainList"

const App = () => {

  if (Platform.OS === 'ios') {
    return (
      <React.Fragment>
        <SafeAreaView style={{ backgroundColor: "#26274F", flex: 0 }}></SafeAreaView>
        <StatusBar barStyle="light-content"></StatusBar>
        <SafeAreaView style={{ backgroundColor: "#000033", flex: 1 }}>
          <MainList />
        </SafeAreaView>
      </React.Fragment>

    )
  } else {
    return (
      <MainList />
    )
  }
}

export default App