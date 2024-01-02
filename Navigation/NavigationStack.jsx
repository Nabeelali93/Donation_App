import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
import Registration from '../Screens/Registration';
import Donate from '../Screens/Select_Category/Donate';
import UserRequest from '../Screens/Select_Category/UserRequest';
import Form from '../Screens/Select_Category/Catergoey_Form/Form';
import About from '../Screens/BottamTabComponets/About';
import Chairman from '../Screens/BottamTabComponets/Chairman';
import Trems from '../Screens/BottamTabComponets/Trems';
import Splash from '../Screens/Splash';


const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    
    <View style={{flex:1}}>
       <NavigationContainer>



      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>


        <Stack.Screen name="Splash" component={Splash} />

        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="main" component={Home} />
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="Donate" component={Donate} />

        <Stack.Screen name="UserRequest" component={UserRequest} />

        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="about" component={About} />
        <Stack.Screen name="trems" component={Trems} />

        <Stack.Screen name="chairman" component={Chairman} />






      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default NavigationStack

const styles = StyleSheet.create({
  
})