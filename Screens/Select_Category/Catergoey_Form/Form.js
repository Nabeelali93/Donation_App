import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Text, StyleSheet, Image, ScrollView,Button, TouchableOpacity } from "react-native";
import Input from "../../../Common/Input";

import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar';
import { Sweet_Alert } from "../../../Common/Sweetalert";

const Form = ({route}) => {

const {req,donate} =  route.params



  // Sahi tareeke se useState ka istemal
  const [data, setData] = useState({
    amount: "",
    name: "",
    phone: "",
    email: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    amount: '',
    name: '',
    phone: '',
    email: '',
    country: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate Amount
    if (!data.amount.trim()) {
      newErrors.amount = 'Amount is required';
      isValid = false;
    } else {
      newErrors.amount = '';
    }

    // Validate Name
    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    // Validate Phone
    if (!data.phone.trim()) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    } else {
      newErrors.phone = '';
    }

    // Validate Email
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Validate Country
    if (!data.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    } else {
      newErrors.country = '';
    }

    setErrors(newErrors);
    return isValid;
  };



  const handleSubmitDetails=async ()=>{

if(req == "request"){

  if (validateForm()) {
    let key = firestore().collection('user').doc().id;

  let obj = {
    amount:data.amount,
    name:data.name,
    phone:data.phone,
    email:data.email,
    country:data.country,
    additionalinfo:data.additionalinfo
  }

  await database()
      .ref(`/users/${req}/${key}`)
      .set(obj)
      .then(() => console.log('Data set.'));
      Sweet_Alert("Your Request has been submitted", "Your Request has been submitted", 'success')

  }
  
  
  else {
    Sweet_Alert("Please Submit Data", "All Fields Required", 'error')

  }


 
}





else{

  if (validateForm()) {
    let key = firestore().collection('user').doc().id;

    let obj = {
      amount:data.amount,
      name:data.name,
      phone:data.phone,
      email:data.email,
      country:data.country,
      additionalinfo:data.additionalinfo
    }
  
  
    await database()
    .ref(`/users/${donate}/${key}`)
    .set(obj)
    .then(() => {
      Sweet_Alert("Thanks For Donate", "Thanks For Donation", 'error')

    });
  } else {




    Sweet_Alert(" Submit Details", "Your Details has been submitted", 'error')

  }

 









 
}

       







  }



  return (

<ScrollView>

    <View style={{ flex: 1 }}>
      <View style={style.Searchbar}>
        <View
          style={{
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 10,
            alignItems: 'center',
          }}>
          <Image










          
            source={require('../../../Assets/images/SaylaniHD.png')}
            style={style.image}
          />
          <Text
            style={{
              fontSize: 20,
              letterSpacing: 3,
              fontWeight: 'bold',
              color: '#f8fafc',
            }}>
            Saylani Welfare Trust.
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "white" }}>Donation Form</Text>
        </View>
      </View>

      <View style={{ flexDirection: "column", gap: 10, padding: 15 }}>
        <Input
          label="Amount"
          placeholder="Enter Amount-(PKRs)"
          keyboardType="numeric"
          value={data.amount}
          onChangeText={(text) => setData({ ...data, amount: text })}
        
        />

        <Input
          label="Donor name"
          placeholder="Enter Full Name"
          value={data.name}
          onChangeText={(text) => setData({ ...data, name: text })}
        />

        <Input
          label="Phone"
          placeholder="Enter Contact"
          keyboardType="numeric"
          value={data.phone}
          onChangeText={(text) => setData({ ...data, phone: text })}
        />

        <Input
          label="Email"
          placeholder="Enter Email Address"
          keyboardType="email-address"
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />

        <Input
          label="Country"
          placeholder="Enter Country Name"
          value={data.country}
          onChangeText={(text) => setData({ ...data, country: text })}
        />

      





      </View>


   

    </View>
    <TouchableOpacity  title="Submit" style={{bordermargin:20,height:70,width:300,margin:30,borderRadius:20 ,backgroundColor:'#0A639C',alignItems:'center',justifyContent:'center'}} onPress={() => handleSubmitDetails()}>
  <Text style={{color:"white" }}>Submit</Text>
  </TouchableOpacity>
    </ScrollView>



  );
};

export default Form;

const style = StyleSheet.create({
  Searchbar: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#0369a1',
    padding: 15,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
});
