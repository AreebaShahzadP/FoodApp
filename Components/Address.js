import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'


const Address= () => {
  const navigation= useNavigation()
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delivery</Text>
      <Text style={styles.head1}>Address Details</Text>
      <Text style={styles.head2}>change</Text>

      <View style={styles.container1}>
        <Text style={styles.heading}>Marvis Kparobo</Text>
        <Text style={styles.mail}>Km 5 refinery road oppsite republic road, effurun, delta state</Text>
        <Text style={styles.heading1}>+234 9011039271</Text>
      </View>
      <Text style={styles.header1}> Delivery Methods</Text>
      <View style={styles.container2}>
        <Text style={{
          fontFamily: 'SF-Pro-Text-Regular', fontSize:17, color:'#000000', fontWeight:'bold',marginLeft:50, top:30 }}>Door Delivery</Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text style={{
          fontFamily: 'SF-Pro-Text-Regular', fontSize:17, color:'#000000', fontWeight:'bold',marginLeft:50, top:25 }}>Pick up</Text>
            <RadioButton
        value = "second"
        status = {checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        </View>
        <Text style={{ fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 18, color: '#000000', marginLeft: 50, top:100 }}>Total</Text>
        <Text style={{ fontFamily: 'SF-Pro-Rounded-Regular',fontSize: 18,color: '#000000',marginLeft: '75%',top:80, fontWeight:'bold'}}>23,000</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')} style={[styles.btn, { backgroundColor: '#E33224', marginTop:'30%' }]}>
        <Text style={[styles.btnText, { color: '#FFFFFF', alignSelf: 'center', fontSize: 18, fontFamily: 'SF-Pro-Rounded-Regular' }]}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Address;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: 20,
    // justifyContent:'center'
    backgroundColor:'#C4C4C4'
  },
  header: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 34,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 22,
  },
  head1:{
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 17,
    color: '#000000',
    marginLeft: 22,
    marginTop:10
  },
  head2:{
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 17,
    color: '#F47B0A',
    marginLeft: '80%',
    top:-20
  },
  container1: {
    width: '85%',
    height: 120,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    marginTop: 10,
    alignSelf: 'center'

  },
  container2: {
    width: '85%',
    height: 120,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    marginTop: 10,
    alignSelf: 'center'
  },
  header1: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 22,
    marginTop: 50
  },
  heading: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 20,


  },
  heading1: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 18,
    color: '#000000',
    marginLeft: 30,
    marginTop: -5,
  },
  mail: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 18,
    color: '#000000',
    marginLeft: 30,
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