import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationStack from './Navigation/NavigationStack'
import Splash from './Screens/Splash'


const App = () => {

  return (
    <View style={{flex:1}}>
      <NavigationStack/>


      {/* <Splash/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})