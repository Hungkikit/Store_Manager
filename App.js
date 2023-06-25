import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QuanLyCuaHang from './Screen/QuanLyCuaHang';
import Add from './Screen/add';
import Details from './Screen/Details';
import Edit from './Screen/edit';
import Personal from './Screen/personal';
import { icon } from './conten';
import Welcome from './Screen/welcome';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
       <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name="QuanLy" component={QuanLyCuaHang} options={{title:"Quản lý", 
      headerShown:false}}/>
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>

  );
}
const TabButton = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       tabBarOptions={{
        activeTintColor: 'red',
      }}
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
      
          if (route.name === 'App') {
            enabled=true;
           return <Image style={{width:25 , height:25}} source={icon.home}/>
          } else if (route.name === 'Personal') {
            enabled=true;
            return <Image style={{width:25 , height:25}}  source={icon.personal}/>
          }
        },
        // tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen  name="App" component={App} options={{headerShown:false , title:"Trang chủ"}  } />
        <Tab.Screen name="Personal" component={Personal} options={{title:"Cá nhân"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default TabButton;

