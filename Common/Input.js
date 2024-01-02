import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          placeholderTextColor="white"
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={props.onChangeText} // Callback function from parent
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    color:"white",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor:"#E8E8F7",
    paddingVertical: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 10,
    color:"white"
  },
});

export default Input;
