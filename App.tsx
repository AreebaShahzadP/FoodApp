import { View, Text } from 'react-native'
import React from 'react'
import FoodItemsScreen from './Components/FoodItemsScreen';
import RadioButtons from './Components/RadioButtons';
import { NavigationContainer } from '@react-navigation/native';
import Cart from './Components/Cart';
import Order from './Components/Order';
import History from './Components/History'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Delivery from './Components/Delivery';
import Address from './Components/Address';
import Payment from './Components/Payment';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='FoodItemsScreen' component={FoodItemsScreen} options={{headerShown:false}}/>
        <Stack.Screen name='My Profile' component={RadioButtons} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App


