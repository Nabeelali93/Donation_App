import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
        style={{color:"black"}}
          placeholderTextColor="black"
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
    color:"black",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 10,
    color:"black"
  },
});

export default Input;
