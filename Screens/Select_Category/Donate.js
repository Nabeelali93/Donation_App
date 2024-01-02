import { StyleSheet, Text, View,Image, ScrollView ,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';


const Donate = ({route,navigation}) => {

  const [inputValue, setInputValue] = useState('');

  const Quickdonate=async ()=>{

   
      let key = firestore().collection('user').doc().id;
    
      let obj = {
        amount:inputValue
        
      }
    
      await database()
          .ref(`/users/quick_donate/${key}`)
          .set(obj)
          .then(() => {
            Snackbar.show({
              text: 'Thanks For Donate',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor:"grey",
              textColor:"white"
            });
          });
    }
    
           
    
    
    
    
    
    
    
    




const {donate} = route.params


  const handleTextChange = (text) => {
    setInputValue(text);
  }

  const handleButtonPress = () => {
    // Handle button press logic here
    console.log('Button Pressed');
  };





  return (
      <ScrollView style={{backgroundColor: '#ecfeff'}}>
    
    <View style={{flex: 1,flexDirection:"row",flexWrap:"wrap", paddingVertical:30, gap:30, backgroundColor: '#ecfeff',justifyContent:"center",alignItems:"center"}}>
      
      
      
      <TouchableOpacity    onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/gaza.png')}
        style={{width:90,height:90}}
      />

<Text  style={{color:"black",fontSize:15,fontWeight:"800",marginVertical:10}}>Gaza Saport</Text>
      </TouchableOpacity>




 
      <TouchableOpacity  onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/blood.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"black",fontSize:15,fontWeight:"800",marginVertical:10}}>Blood Bank</Text>
      </TouchableOpacity>





      <TouchableOpacity  onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/family.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"black",fontSize:15,fontWeight:"800",marginVertical:10}}>Family Kifalat</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/sadqah.png')}
        style={{width:90,height:90,objectFit:"fill"}}
      />

<Text style={{color:"black",fontSize:15,fontWeight:"800",marginVertical:10}}>Sadqah/Aqiqah</Text>
      </TouchableOpacity>




      <TouchableOpacity onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/zaqat.png')}
        style={{width:90,height:90}}
      />

      </TouchableOpacity>



      <TouchableOpacity  onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/sadqah.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"black",fontSize:15,fontWeight:"800",marginVertical:10}}>Sadqah Jariyah</Text>
      </TouchableOpacity>




<View style={{flexDirection:"column",width:85+"%",height:190,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>

<Text style={{color:"#0369a1",fontSize:20,marginVertical:10}}>General Donaction</Text>
<View style={{borderWidth:2,borderColor:"#a3e635",width:80+"%",height:40,marginVertical:10,borderRadius:5}}>
<TextInput
        style={{color:"black"}}
        placeholderTextColor="gray" 
        placeholder="Amount(Rs.)"
        value={inputValue}
        onChangeText={handleTextChange}
      />

<TouchableOpacity
        style={{backgroundColor:"#0369a1",width:100+"%",height:40,marginVertical:10,borderRadius:5,justifyContent:"center",alignItems:"center"}}
        onPress={Quickdonate}
      >
        <Text style={{color:"white",fontSize:17}}>Quick Donate</Text>
      </TouchableOpacity>


</View>





</View>
      
    </View>
      </ScrollView>
  )
}

export default Donate

const styles = StyleSheet.create({

  
})