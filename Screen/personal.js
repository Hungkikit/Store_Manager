import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { icon } from '../conten';

export default function Personal() {

return(
    <View style={{flex:1}}>
       <Image style={{
        width:"100%",height:180
       }} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmM82zCwlFWwlmUQ78Tp-6nt4SuGBiMwLnzQ&usqp=CAU"}}/>
       <Image style={{
        width:130 , height:130,
        borderRadius:65, justifyContent: "center" , alignSelf:"center",position:"absolute",
        marginTop:100 , borderWidth:3 , borderColor:"white",

       }} source={{uri:"https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/295682804_537722348099512_3148075894767478907_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ASFYf-N6_mYAX8fLAP-&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA8UiAbvZfzwZOjWaqsoPSvNO1-e5d_EV3gS7jIoWZR7A&oe=63E85299"}}/>
       <Text style={{alignSelf:"center", marginTop:60, fontSize:25, fontWeight:"bold"}}>Nguyễn Văn Hùng</Text>
       <Text style={{alignSelf:"center", fontSize:18}}>PH25605</Text>
    </View>
)

}