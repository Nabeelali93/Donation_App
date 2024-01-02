import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Swiper from 'react-native-swiper';
import Heart from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

import Commit from 'react-native-vector-icons/Octicons'; // You can use any other icon library
import Like from 'react-native-vector-icons/SimpleLineIcons'; // You can use any other icon library
import Sharealt from 'react-native-vector-icons/AntDesign'; // You can use any other icon library



const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [iconColor, setIconColor] = useState('lightgray');

  const handleSearch = () => {
    // Implement your search logic here using the searchText state
    console.log('Searching for:', searchText);
    // You can perform your search-related actions here
  };


  const handleIconClick = () => {
    // Toggle the color on click
    const newColor = iconColor === 'black' ? 'red' : 'black';
    setIconColor(newColor);
  };



  const [post, setpost] =useState(null);



  
  useEffect(() => {
    const onValueChange = database()
      .ref('/addpost/')
      .on('value', snapshot => {
      
        const userItem = snapshot.val();
        let items = Object.values(userItem);

        setpost(items)

      
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/addpost/').off('value', onValueChange);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    
        {/* header  */}
        <View style={styles.Searchbar}>
          <View
            style={{
              marginHorizontal: 5,
              flexDirection: 'row',
              justifyContent: 'space-around',
              gap: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/images/SaylaniHD.png')}
              style={styles.image}
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
        </View>
        <ScrollView>
        {/* Slider */}
        <View style={{justifyContent: 'center', padding: 10}}>
          <Swiper style={styles.wrapper } showsButtons={false} autoplay={true} showsPagination={false}>
            <View style={styles.slide1}>
              <Image
                source={{
                  uri: 'https://scontent.fhdd4-1.fna.fbcdn.net/v/t31.18172-8/12829309_1360865667272706_2142070370632607323_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c2f564&_nc_eui2=AeFSRWrDuIk_ppQhoAwVsiaCQl_8RfYhrZtCX_xF9iGtm3c1UOeuOtNhR7pAIYbTHP43gP4I7aKF_sok5tmKWKaQ&_nc_ohc=Ni587r4cu0kAX9ReZzM&_nc_ht=scontent.fhdd4-1.fna&oh=00_AfA2NsvegmDeE947-Dq20V5QFFGY9QzWssJO73T4vkxKQA&oe=65B9F1ED',
                }} // Replace with the actual path to your image
                style={{
                  width: 100 + '%',
                  height: 220,
                  objectFit: 'fill',
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.slide2}>
              <Image
                source={{
                  uri: 'https://scontent.fhdd4-1.fna.fbcdn.net/v/t1.18169-9/64742_415982991822532_1239662645_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeE0AYOf47GPS6jpvptW3az2ZMOlul3XVM9kw6W6XddUz-GxcG3T-AWESJL1Kt6O3wQGG_u2aejWIkYiaAoYaWaP&_nc_ohc=JZ67r8UDJswAX-7cvPL&_nc_ht=scontent.fhdd4-1.fna&oh=00_AfBDuUYzAyQ-tXg83xLbMvvJNlQV5lXWZsMJtWQmgsSwdQ&oe=65B9EA34',
                }} // Replace with the actual path to your image
                style={{
                  width: 100 + '%',
                  height: 220,
                  objectFit: 'fill',
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.slide3}>
              <Image
                source={{
                  uri: 'https://newsaylani.firebaseapp.com/assets/images/tradeCover.jpg',
                }} // Replace with the actual path to your image
                style={{
                  width: 100 + '%',
                  height: 220,
                  objectFit: 'fill',
                  borderRadius: 20,
                }}
              />
            </View>
          </Swiper>
        </View>

        {/* Cards */}

        <View style={{margin: 20}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '500'}}>
            What We are Doing
          </Text>
        </View>

        <ScrollView horizontal={true} style={{marginHorizontal: 16}}>
          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927889/website-images/static/44.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: '500', color: '#0369a1'}}>
              Welfare
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927857/website-images/static/41.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: '500', color: '#0369a1'}}>
              Medical
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927849/website-images/static/39.png',
              }} // Replace with the actual path to your image
              style={{width: 40, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: '500', color: '#0369a1'}}>
              Online Sadqah
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927853/website-images/static/40.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: '500', color: '#0369a1'}}>
              RO plant
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927923/website-images/static/48.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: '500', color: '#0369a1'}}>
              Education
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927876/website-images/static/43.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: '500', color: '#0369a1'}}>
              Food
            </Text>
          </View>
        </ScrollView>

      





 <View style={{margin: 20}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '500'}}>
          Saylani All Media Post

          </Text>
        </View>



{/* Post Cards */}



<FlatList
        data={post}
        renderItem={({item, index}) => (
            <View key={index} style={{flexDirection: 'column',  marginVertical:5,backgroundColor:"#f3f4f6",paddingVertical:5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Image
   source={require('../../Assets/images/SaylaniHD.png')}

                  style={{width: 46, height: 46}}
                />

                <View>
                  <Text style={{fontSize: 17,color:"black", fontWeight:800}}>Saylani Media</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Text style={{fontSize: 12,color:"black", fontWeight:500}}>{item.title}</Text>
                  </View>
                </View>
              </View>

            </View>

            
            <View style={{marginHorizontal:15 , marginTop:10}}>
            <Text style={{fontSize: 14,color:"black"}}>{item.Description}</Text>

            </View>

            {/* Image Post */}
            <View style={{marginVertical: 5 }}>
              <Image
                source={{
                  uri: `${item.Image}`,
                }}
                style={{width:100+'%' ,height: 200, objectFit:"cover"}}
              />
            </View>
            {/* Like Shear */}
            <View style={styles.actionIcons}>
       
<View style={{flexDirection:'row' , gap:10, alignItems:'center'}}>
<TouchableOpacity>
          <Like name="like" size={20} color="#0369a1" />
        </TouchableOpacity>
        <TouchableOpacity >
          <Commit name="comment" size={20} color="#0369a1" />
        </TouchableOpacity>
</View>


        <TouchableOpacity >
          <Sharealt name="sharealt" size={20} color="#0369a1" />
        </TouchableOpacity >
      </View>

          </View>
        )}
        keyExtractor={item => item.key}
        style={{marginTop: 0}}
      />


<Text>

        {'\n'} {'\n'}
        {'\n'} {'\n'}
       
       
</Text>











      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0369a1',
    padding: 15,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 15, // Set your desired bottom left border radius value
    borderBottomRightRadius: 15, // Set your desired bottom right border radius value
  },

  actionIcons: {
   
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal:15,
    marginVertical:10
  },


  image: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    width: 280,
    borderColor: 'White',
    borderWidth: 1,
    borderRadius: 100,
  },
  input: {
    flex: 1,
    height: 40,
    width: 200,

    marginRight: 10,
    paddingHorizontal: 8,
  },

  // swiper style start
  wrapper: {
    height: 200,
  
  },
  wrapper2: {
    height: 300,
    backgroundColor:"#e5e7eb"
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 20,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    borderRadius: 50,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    borderRadius: 50,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  // swiper style and
  smallcard: {
    width: 100,
    height: 100,
    backgroundColor: '#f1f5f9',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  Mediamcard:{
    width: 110,
    height: 145,
    backgroundColor: '#f1f5f9',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  }
});
