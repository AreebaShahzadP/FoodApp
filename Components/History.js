import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function History() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.title, { color: '#00040a' }]}>History</Text>
                <Image style={{ width: 113, height: 107, resizeMode: 'contain', marginLeft: '35%', marginTop: '60%' }} 
                source={require('../assets/images/calendar.png')} />
                <Text style={styles.heading2}>No History yet</Text>
                <Text style={styles.description}>
                    Hit the orange button down{'\n'}
                      below to Create an order
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Order')} style={[styles.btn, { backgroundColor: '#E33224' }]}>
                    <Text style={[styles.btnText,{color:'#FFFFFF'}]}>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    title: {

        fontFamily: 'SF-Pro-Text-Regular',
        fontWeight: 600,
        alignSelf: 'center',
        top: 20,
        fontWeight: 'bold',
        fontSize: 18,
        left:10

    },
    heading2: {
        top: 40,
        fontSize: 28,
        color: '#000000',
        fontFamily: 'SF-Pro-Text-Regular',
        textAlign:'center'
    },
    description: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 17,
        color: '#C7C7C7',
        top: 40,
        textAlign:'center'
    },
    btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Regular',
        alignSelf:'center',
        
       
    },
    btn: {
        // width: '90%',
        padding: 15,
        marginTop: '60%',
        borderRadius: 30,
        // marginLeft: 50,
        // top: 260,
        // right: 375,
        // height: 40,
        width: 200,
        left:5,
        alignSelf:'center'

    }
})
