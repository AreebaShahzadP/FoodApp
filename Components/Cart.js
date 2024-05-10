import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default Cart = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Cart</Text> */}
            <Image style={{ width: 149, height: 20, alignSelf: 'center', marginTop: 60 }} source={require('../assets/images/text.png')} />
            <Image style={{ width: 330, height: 120, alignSelf: 'center', marginTop: 30, paddingTop: 10 }} source={require('../assets/images/1.png')} />
            <Image style={{ width: 330, height: 120, alignSelf: 'center', top: 10, }} source={require('../assets/images/2.png')} />
            <Image style={{ width: 220, height: 100, left: -10, top: 5 }} source={require('../assets/images/3.png')} />
            <View style={styles.container1}>
                <Image style={{ width: 20, height: 20, backgroundColor: '#DF2C2C', marginLeft: 220, marginTop: -135 }} source={require('../assets/images/heart.png')} />
                <Image style={{ width: 20, height: 20, backgroundColor: '#DF2C2C', marginLeft: 250, marginTop: -20, }} source={require('../assets/images/bin.png')} />
            </View>
            <View><TouchableOpacity onPress={() => navigation.navigate('History')} style={[styles.btn, { backgroundColor: '#E33224' }]}>
                <Text style={[styles.btnText, { color: '#ffffff' }]}>Order</Text>
            </TouchableOpacity></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C7C7C7'
    },
    container1: {
        width: 100, height: 100, borderRadius: 50, color: '#DF2C2C', marginTop: 70
    },

    header: {
        width: 39, height: 21, fontFamily: 'SF-Pro-Text-Regular', fontWeight: 'bold', fontSize: 18,
        alignSelf: 'center',
        marginTop: 10,
        color: '#000000'
    },
    btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Regular',
        alignSelf: 'center',

    },
    btn: {
        padding: 15,
        // marginTop: 5,
        borderRadius: 30,
        // marginLeft: 50,
        // top: 260,
        // right: 375,
        // height: 40,
        width: 200,
        alignSelf: 'center',


    }
})




{/* <Image style={{ width: 20, height: 20, top: 40, marginLeft: '70%', top: -20 }} source={require('../assets/images/heart.png')} />
                <Image style={{ width: 20, height: 20, marginLeft: '80%', top: -40 }} source={require('../assets/images/bin.png')} />
                </View> */}