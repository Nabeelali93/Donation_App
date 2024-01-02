import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const UserRequest = ({navigation,route}) => {

  const {req}  = route.params




  return (
    <View style={{flex: 1,flexDirection:"column", paddingVertical:30, gap:30, backgroundColor: '#ecfeff',justifyContent:"center",alignItems:"center"}}>
      
      <TouchableOpacity 
      onPress={()=>navigation.push("Form",{req})}
      style={{width:200,height:200,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/blood.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"black",fontSize:15,fontWeight:"800",marginVertical:10}}>Need Blood </Text>
      </TouchableOpacity>




      
      <TouchableOpacity
       onPress={()=>navigation.push("Form",{req})}
      style={{width:200,height:200,backgroundColor:"#e0f2fe",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/sadqah.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"black",fontSize:15,fontWeight:"800",marginVertical:10}}>Need Other help</Text>
      </TouchableOpacity>



    </View>
  )
}

export default UserRequest

const styles = StyleSheet.create({})