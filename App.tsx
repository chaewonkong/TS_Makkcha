import React from 'react'
import { View, SafeAreaView, Platform, Text } from 'react-native'

const App = () => {

  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>막차</Text>
        </View>
      </SafeAreaView>
    )
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Text>막차</Text>
      </View>
    )
  }
}

export default App