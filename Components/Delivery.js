import { StyleSheet, View, Image, Text, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Delivery() {
  const navigation= useNavigation()
  
  const image1 = require('../assets/images/Food.png');
  const image2 = require('../assets/images/image2.png');
  const image3 = require('../assets/images/image3.png');
  const image4 = require('../assets/images/image4.png');
  
  const ImageSlider = () =>{
    const d2=[image1,image2,image3,image4];
  }
  
  return (
    <View style={styles.container}>
      <Icon name="heart" size={28} color="red" style={{ paddingLeft: '80%', paddingTop: 20 }} />
      <View style={styles.slideContainer}>
      <SliderBox
        images={d2}
        sliderBoxHeight={230}
        inactiveDotColor="#90A4AE"
        dotColor="#FA4A0C"
        resizeMode="contain"
        // Other props...
      />
      </View>
      <Text style={styles.heading}>Veggie tomato mix</Text>
      <Text style={styles.heading1}>N1,900</Text>
      <View>
        <Text style={styles.head}>Delivery info </Text>
        <Text style={styles.description}>
          Delivered between monday aug and {'\n'}
          thursday 20 from 8pm to 91:32 pm
        </Text>
        <Text style={styles.head1}>Return policy </Text>
        <Text style={styles.description1}>
          All our foods are double checked before {'\n'}
          leaving our stores so by any case you {'\n'}
          found a broken food please contact our {'\n'}
          hotline immediately.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Address')} style={[styles.btn, { backgroundColor: '#E33224' }]}>
          <Text style={[styles.btnText, { color: '#FFFFFF' }]}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent:'center'
  },
  slideContainer:{
    height:230,
    marginTop:10
  },
  heading: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 28,
    color: '#000000',
    paddingTop: 20,
    fontWeight: 'bold'
  },
  heading1: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 22,
    color: '#FA4A0C',
    paddingTop: 5,
  },

  img: {

    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },

  head: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 20,
    color: '#000000',
    paddingTop: 20,
    fontWeight: 'bold'
  },
  description:
  {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 18,
    color: '#5c5b5a',
    paddingTop: 20,

  },
  head1: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 20,
    color: '#000000',
    paddingTop: 20,
    fontWeight: 'bold',

  },
  description1:
  {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 18,
    color: '#5c5b5a',
    paddingTop: 20
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'SF-Pro-Text-Regular',
    alignSelf: 'center',
  },
  btn: {
    padding: 15,
    borderRadius: 30,
    // marginLeft: 50,
    marginTop: 30,
    // right: 375,
    height: 50,
    width: 200,
    alignSelf: 'center'

  }
}
)