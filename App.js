import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import ShoppingCart from './src/screens/ShoppingCart';
import ProductInfo from './src/screens/ProductInfo';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='ShoppingCart' component={ShoppingCart}/>
      <Stack.Screen name='ProductInfo' component={ProductInfo}/>
    </Stack.Navigator>
   </NavigationContainer>
 );
}
