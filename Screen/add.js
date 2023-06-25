
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { API_Store } from '../API/StoreAPI';
// import AsyncStorage from '@react-native-community/async-storage';
export default function Add(props) {
    // const route = useRoute();
    // const {data, setData} = route.params;
    const MoveScesen = (tenMH, data = {}) => {
        navigation.navigate(tenMH, data);
    }
    const navigation = props.navigation;
    const onClear = () => {
        setName("");
        setDrees("");
        setPhone("");
        setImage("");
    }
    const onSave =()=>{
         const newList = {
        // id: data.length == 0 ? 1 : data[data.length - 1].id + 1,
        name, drees, phone, Image, status,
    }
       fetch(API_Store,{
        method: 'POST',
        body: JSON.stringify(newList),
        headers:{
            "Content-Type": "application/json",
            "ACCEPT": "application/json"
        }
       })
       .catch(err => console.log(err))
       
    }
    const [name, setName] = useState('');
    const [drees, setDrees] = useState('');
    const [phone, setPhone] = useState('');
    const [Image, setImage] = useState('');
    const [status, setStatus] = useState(1);

   

    return (
        <View style={{ padding: 20 }}>
            <Text style={{
                fontSize: 25, fontWeight: "bold", alignSelf: "center",
                marginTop: 10
            }}>Add Store</Text>
            <TextInput
                onChangeText={(text) => {
                    setName(text);
                }}
                style={{ marginTop: 30, borderWidth: 1, padding: 7 }}
                placeholder='Name Store' />
            <TextInput
                onChangeText={(text) => {
                    setDrees(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Drees' />
            <TextInput
                onChangeText={(text) => {
                    setPhone(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Phone' />
            <TextInput
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
                    //   setData([...data, newList]);
                      onSave();
                      onClear();
                      navigation.goBack();
                      
                    }}
                    style={{ backgroundColor: "red", borderRadius: 8 }}>
                    <Text style={{ color: "white", padding: 10, fontWeight: "bold" }}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}