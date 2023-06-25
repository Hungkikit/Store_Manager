import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { icon } from '../conten';
import { API_Store } from '../API/StoreAPI';
export default function Edit(props) {
    const route = useRoute();
    const navigation = props.navigation;
    const {item ,} = route.params;
    const [name, setName] = useState(item.name);
    const [drees, setDrees] = useState(item.drees);
    const [phone, setPhone] = useState(item.phone);
    const [Image, setImage] = useState(item.Image);
    const [status, setStatus] = useState(item.status);


    // const onClear = () => {
    //     setName("");
    //     setDrees("");
    //     setPhone("");
    //     setImage("");
    // }
    // const onEdit = (idEdit) =>{
    //    const newList = data.map(item =>{
    //     if(item.id === idEdit){
    //         item.name = name;
    //         item.phone = phone;
    //         item.Image = Image;
    //         item.drees = drees;
            
    //     }
    //     return item;
    //    })
    //    setDataList(newList);
    //    onClear();
    // }
    const onEdit = (idEdit) =>{
        const newList ={
            name: name,
            phone: phone,
            Image: Image,
            drees: drees,
            status: status

        }
        fetch(API_Store+"/"+idEdit,{
            method: 'PUT',
            body: JSON.stringify(newList),
            headers:{
                "Content-Type": "application/json",
                "ACCEPT": "application/json"
            }
        }).catch(err => console.log(err));
        
    }
  return(
    <View style={{padding:20}}>
        <Text style={{
                fontSize: 25, fontWeight: "bold", alignSelf: "center",
                marginTop: 10
            }}>Edit Shop</Text>
            
            <TextInput
            value={name}
                onChangeText={(text) => {
                    setName(text);
                }}
                style={{ marginTop: 30, borderWidth: 1, padding: 7 }}
                placeholder='Name Store' />
            <TextInput
             value={drees}
                onChangeText={(text) => {
                    setDrees(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Drees' />
            <TextInput
             value={phone}
                onChangeText={(text) => {
                    setPhone(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Phone' />
            <TextInput
             value={Image}
                onChangeText={(text) => {
                    setImage(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Link image' />
            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 30 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        backgroundColor: "red", borderRadius: 8,
                        marginRight: 10
                    }}>
                    <Text style={{ color: "white", padding: 10, fontWeight: "bold", }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        onEdit(item.id);
                        navigation.navigate("QuanLy")
                      
                    }}
                    style={{ backgroundColor: "red", borderRadius: 8 }}>
                    <Text style={{ color: "white", padding: 10, fontWeight: "bold" }}>Save</Text>
                </TouchableOpacity>
            </View>
    </View>
  )

}