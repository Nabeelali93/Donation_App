import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/FontAwesome5';
import Login from 'react-native-vector-icons/AntDesign';
import Snackbar from 'react-native-snackbar';

// Firebase Imports

import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Sweet_Alert } from '../Common/Sweetalert';




const SignUp = ({navigation}) => {

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleemailChange = (email) => {
    setEmail(email);
  };


  const hendelname=async ()=>{
    await AsyncStorage.setItem('name',name)

    
    
  }

  const handleTextChange =   (name) => {
    setname(name)
    hendelname()
    
  };
  const handlePasswordChange = (inputPassword) => {
    setPassword(inputPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  

 

  

 


// Firebase Work 


 const createEmailPassword= ()=>{
        if(email=="" ){
         Sweet_Alert("Empty Email", "please enter email", 'error')
        }
        else if(password=="" ){
          Sweet_Alert("Empty password", "please enter password", 'error')

        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
          Sweet_Alert("Invalid Email", "Invalid Email Address", 'error')
        }

        else if(password.length<8){
          Sweet_Alert("Password must 8 character", "Password must 8 character", 'error')

        }

        else{
          auth()
.createUserWithEmailAndPassword(email, password)
.then(() => {
  Sweet_Alert("Account Created", "Account Created Successfully", 'success')

})
.catch(error => {
  Sweet_Alert("Enter Correct Data", "Please Enter Correct Data", 'Error')


  console.error(error);
});
        }


     


      }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor:"#0369a1" }}>
      <ScrollView>
      <View style={styles.topcontainer}>
        <View style={styles.topchild}>
        <Image
       source={require('../Assets/images/logo.png')}
        style={styles.image}
      />
        </View>
      </View>
<View style={styles.bottom}>

<View style={styles.bottomchild}>

{/* name field */}


<View style={styles.inputContainer}>

      <View style={styles.iconContainer}>
        <Icon name="user" size={20} color="#0369a1" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        placeholderTextColor="gray"
        onChangeText={handleTextChange}
        value={name}
      />
    </View>


{/* email field */}


<View style={styles.inputContainer}>

      <View style={styles.iconContainer}>
        <Icon name="envelope" size={17} color="#0369a1" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="gray"
        onChangeText={handleemailChange}
        value={email}
      />
    </View>


    {/* password field */}

    <View style={styles.inputContainer}>
    <View style={styles.iconContainer}>
        <Lock name="lock" size={17} color="#0369a1" />
      </View>
   
<TextInput
  style={styles.input}
  secureTextEntry={!isPasswordVisible}
  placeholder="Enter your Password"
  placeholderTextColor="gray"
  onChangeText={handlePasswordChange}
  value={password}
/>

<TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer2}>
        <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#0369a1" />
      </TouchableOpacity>
</View>
<Text style={{fontSize:10,color:"white",textAlign:"left",marginLeft:30}}>Forget Password ?</Text>



{/* login button  */}


<TouchableOpacity onPress={createEmailPassword} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>SignUp</Text>
        <Login name="login" size={15} color="white" />
      </TouchableOpacity>
      <Text style={{fontSize:10,color:"white",textAlign:"center",marginTop:0}}>You Have Account ? <Text onPress={()=>navigation.push("Login")} style={{color:"#84cc16"}}> SignIn</Text></Text>
{/* login with google and facebook */}


<View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:40}}>

<Image
       source={require('../Assets/images/google.webp')}
        style={styles.iconimage}
      />
       <Image
       source={require('../Assets/images/download.png')}
        style={styles.iconimage}
      />
  
</View>

    </View>
</View>
</ScrollView>
    </SafeAreaView>
  )
}




const handleSignup = () => {
    
  

}

export default SignUp

const styles = StyleSheet.create({

  topcontainer:{
      flex:3,
      backgroundColor:"white",
      borderBottomLeftRadius: 30, // Set your desired bottom left border radius value
      borderBottomRightRadius: 30, // Set your desired bottom right border radius value
      height:250

     
     
  }
,
bottom:{
  flex:6,
  backgroundColor:"#0369a1"
},
topchild:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
marginTop:10  
},
bottomchild:{
paddingHorizontal:20,
paddingVertical:30

},
image: {
  width: 430,
  height: 250,
  objectFit:"contain"
},
topchildtext:{
  fontSize:20,
  color:"#65a30d",
  fontWeight:"800"
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 20,
  margin: 10,
  padding: 1,
  alignItems:"center",
  backgroundColor:"white"
  
},
iconContainer: {
  marginHorizontal:10
},
iconContainer2: {
  marginLeft: 0,
},
input: {
  color:"black",

  height: 30,
  margin: 10,
  padding: 2,
  width: 200,
 
},
loginButton: {
  backgroundColor: '#3498db',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:"center",
  gap:10,
  padding: 15,
  margin: 10,
  borderRadius: 30,
  marginTop: 10,
  
},
loginButtonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign:"center",

},
iconimage:{
  width: 50,
  height: 50,
  borderRadius: 30,
  objectFit:"contain"
}
})