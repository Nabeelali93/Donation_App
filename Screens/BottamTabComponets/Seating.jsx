import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking,
  } from 'react-native';
  import React from 'react';
  import { useNavigation } from '@react-navigation/native';
  
  const Seating = () => {
      const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop
  
      const openAboutScreen = () => {
          navigation.push('about');
        };
  
  
        const openTremsScreen =()=>{
          navigation.push('trems');
  
        }
  
        const openMessageScreen =()=>{
          navigation.push('chairman');
  
        }
  
    const openWebsite = () => {
      const websiteURL = 'https://www.saylaniwelfare.com/en'; // Replace with your website URL
      Linking.openURL(websiteURL);
    };
  
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* {/ header /} */}
        <View
          style={{
            backgroundColor: '#0369a1',
            height: 280,
            borderBottomRightRadius: 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 45,
              fontWeight: '900',
              letterSpacing: 7,
              marginLeft: 40,
              marginTop: 140,
            }}>
            Settings
          </Text>
          <Text style={{color: 'white', marginLeft: 50, fontSize: 20}}>
            Saylani Information
          </Text>
        </View>
        {/* {/ body /} */}
  
        {/* {/ about  /} */}
  
        {/* {/  /} */}
        <TouchableOpacity
        onPress={openAboutScreen}
  style={{
            width: 80 + '%',
            flexDirection: 'row',
            marginTop: 40,
            gap: 120,
            alignItems: 'center',
            marginVertical: 10,
            justifyContent: 'center',
            marginHorizontal: 10,
            backgroundColor: '#0369a1',
            padding: 12,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            About
          </Text>
          <Image
            source={require('../../Assets/images/about.png')}
            style={{width: 42, height: 42}}
          />
        </TouchableOpacity>
  
        {/* {/ TERM AND CONDITON /} */}
  
        <TouchableOpacity
  
  onPress={openTremsScreen}
  
          style={{
            width: 80 + '%',
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
            marginVertical: 10,
            justifyContent: 'center',
            marginHorizontal: 10,
            backgroundColor: '#0369a1',
            padding: 12,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Trems & Condation
          </Text>
          <Image
            source={require('../../Assets/images/trems.png')}
            style={{width: 38, height: 38}}
          />
        </TouchableOpacity>
  
        {/* {/  /} */}
        <TouchableOpacity
        onPress={openWebsite}
          style={{
            width: 80 + '%',
            marginVertical: 10,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginHorizontal: 10,
            backgroundColor: '#0369a1',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Visit Our website
          </Text>
          <Image
            source={require('../../Assets/images/SaylaniHD.png')}
            style={styles.image}
          />
        </TouchableOpacity>
  
  
  {/* {/ message /} */}
  
  
  <TouchableOpacity
onPress={openMessageScreen}
          style={{
            width: 80 + '%',
            marginVertical: 10,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginHorizontal: 10,
            backgroundColor: '#0369a1',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Chairman Message
          </Text>
          <Image
            source={require('../../Assets/images/SaylaniHD.png')}
            style={styles.image}
          />
        </TouchableOpacity>
  
  
  
  
  
  
      </View>
    );
  };
  
  export default Seating;
  
  const styles = StyleSheet.create({
    image: {
      width: 38,
      height: 38,
      objectFit: 'scale-down',
      backgroundColor: 'white',
      borderRadius: 30,
    },
  });
  
  // SETTING=>LANGUAGE,ABOUT =>WEBSITE ,TERM AND CONDITON
  