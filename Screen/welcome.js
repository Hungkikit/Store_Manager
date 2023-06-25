import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
export default function Welcome(props){
    const navigation = props.navigation
   useEffect(() => {
    setTimeout(()=>{
        navigation.navigate("QuanLy") 
    },4000)
   },[])
    return(
        <View style={{alignItems:"center",justifyContent:"center", flex:1}}>
          <Image style={{
            height:140, width:140,
            borderRadius:70
          }} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5Lpbj-1Faanq_ZZ6bb2lXFfST_qwRCfogg&usqp=CAU"}} />
          <Text style={{fontSize:30, fontWeight:"bold"}}>Manager</Text>
        </View>
    )
}