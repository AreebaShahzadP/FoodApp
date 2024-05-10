import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'



const RadioButtons = () => {
  const navigation= useNavigation()
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container4}>
    <View style={styles.searchBar}>
    <TouchableOpacity onPress={() => navigation.navigate('FoodItemsScreen')}>
    <Icon name='chevron-left' size={15}  color="#000000" marginTop={30} marginLeft={20} />
    </TouchableOpacity>
      <TextInput
        placeholder="My Profile"
        placeholderTextColor={'#000000'}
        style={{fontFamily:'SF-Pro-Rounded-Medium',height:40,width:80, fontWeight:'bold',fontSize:17,alignSelf:'center'}}
      />
      </View>
    <View style={styles.container}>
      <Text style={styles.header}>Information</Text>
      <View style={styles.container1}>
        <Image style={[styles.img, {
          width: 50, height: 50, borderRadius: 10, backgroundColor: '#FFFFFF', marginTop: 20, marginLeft: 5
        }]} source={require('../assets/images/profile.png')} />
        <Icon name="pencil" size={20} color="black" style={{ marginLeft: '90%', top: -45 }} />
        <Text style={styles.heading}>Marvis Ighedosa</Text>
        <Text style={styles.mail}>dosamarvis@gmail.com</Text>
        <Text style={styles.heading1}>No 15 uti street off ovie palace road effurun delta state</Text>
      </View>
      <Text style={styles.header1}> Payment Methods</Text>
      <View style={styles.container2}>
      <View style={{ width: 40, height: 40, backgroundColor: '#F47B0A', marginLeft: 40, marginTop:-50, top:60,borderRadius: 8 }}><Image style={{ width: 20, height: 20, alignSelf:'center', marginTop:20,top:-10 }} source={require('../assets/images/card.png')} /></View>
        <Text style={{
          fontFamily: 'SF-Pro-Text-Regular', fontSize:17, color:'#000000', fontWeight:'bold',marginLeft:100, top:30 }}>Card</Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color='#FA4A0C'
          uncheckedColor="FA4A0C" 
        />
        <View style={{ width: 40, height: 40, backgroundColor: '#EB4796', marginLeft: 40, marginTop:-50, top:60,borderRadius: 8 }}><Image style={{ width: 20, height: 20, alignSelf:'center', marginTop:20,top:-10 }} source={require('../assets/images/bank.png')} /></View>
        <Text style={{
          fontFamily: 'SF-Pro-Text-Regular', fontSize:17, color:'#000000', fontWeight:'bold',marginLeft:100, top:30 }}>Bank Account</Text>
            <RadioButton
        value = "second"
        status = {checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
          color='#FA4A0C'
          uncheckedColor="FA4A0C" 
        />
         <View style={{ width: 40, height: 40, backgroundColor: '#0038FF', marginLeft: 40, marginTop:-50, top:60,borderRadius: 8 }}><Image style={{ width: 20, height: 20, alignSelf:'center', marginTop:20,top:-10 }} source={require('../assets/images/paypal.png')} /></View>
        <Text style={{
          fontFamily: 'SF-Pro-Text-Regular', fontSize:17, color:'#000000', fontWeight:'bold',marginLeft:100, top:30 }}>PayPal</Text>
        <RadioButton
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
          color='#FA4A0C'
          uncheckedColor="FA4A0C" 
        />
        </View>
      <TouchableOpacity onPress={() => navigation.navigate('Delivery')} style={[styles.btn, { backgroundColor: '#E33224', marginTop:'50%' }]}>
        <Text style={[styles.btnText, { color: '#FFFFFF', alignSelf: 'center', fontSize: 18, fontFamily: 'SF-Pro-Rounded-Regular' }]}>Update data</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
export default RadioButtons;

const styles = StyleSheet.create({

  container4:{
    flex:1,
  },
  container: {
    // alignItems: 'center',
    paddingTop: 20,
    // justifyContent:'center'
   
  },
  header: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 40
  },
  container1: {
    width: '80%',
    height: 120,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    marginTop: 10,
    alignSelf: 'center',
    shadowColor:'#0a0a0a',
    elevation:5,

  },
  container2: {
    width: '80%',
    height: 150,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingBottom:20,
    marginTop: 20,
    alignSelf: 'center', shadowColor:'#0a0a0a',
    elevation:5,
  },
  header1: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 50
  },
  heading: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 70,
    marginTop: -70,

  },
  heading1: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 18,
    color: '#000000',
    marginLeft: 70,
    marginTop: -5,
  },
  mail: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 18,
    color: '#000000',
    marginLeft: 70,
    marginTop: 0,
  },
  btn: {
    padding: 15,
    borderRadius: 30,
    // marginLeft: 50,
    marginTop: 90,
    // right: 375,
    height: 50,
    width: 200,
    alignSelf: 'center'

  }
})