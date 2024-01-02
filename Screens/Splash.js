
import logo from "../Assets/images/logo.png"
import { useNavigation } from '@react-navigation/native';

import { ActivityIndicator, MD2Colors, Text } from 'react-native-paper';


import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Easing } from 'react-native';

const Splash = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    // Start the animation when the component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // Hide the splash screen after the animation completes
    setTimeout(() => {

      navigation.replace("Login")
    },2000); // Adjust the timeout based on your animation duration
  }, [fadeAnim]);

  return (
    <Animated.View style={{gap:20, flex: 1, justifyContent: 'center', alignItems: 'center', opacity: fadeAnim }}>


      {/* Your animated image */}
      <Image
       source={logo}
        style={{ width: 300, height: 300 }}
      />

<ActivityIndicator style={{paddingTop:30}} animating={true} color={MD2Colors.green800} size={'large'} />

    </Animated.View>
  );
};

export default Splash;
