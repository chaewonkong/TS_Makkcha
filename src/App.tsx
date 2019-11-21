import React from 'react'
import { View, SafeAreaView, Platform, Text, StatusBar } from 'react-native'

const App = () => {

  if (Platform.OS === 'ios') {
    return (
      <React.Fragment>
        <SafeAreaView style={{ backgroundColor: "#26274F", flex: 1 }}></SafeAreaView>
        <StatusBar barStyle="light-content"></StatusBar>
        <SafeAreaView style={{ backgroundColor: "#000033", flex: 1 }}>
          <View>
            <Text style={{ color: "white", fontSize: 20 }}>막차</Text>
          </View>
        </SafeAreaView>
      </React.Fragment>

    )
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "#000033" }}>
        <Text style={{ color: "white", fontSize: 20 }}>막차</Text>
      </View>
    )
  }
}

export default App