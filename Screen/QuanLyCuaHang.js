
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { API_Store } from '../API/StoreAPI';
import { useIsFocused } from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage';
export default function QuanLyCuaHang(props) {
    const navigation = props.navigation;
    const route = useRoute();
    const [name, setName] = useState('');
    const [drees, setDrees] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const status = useIsFocused();
    const onClear = () => {
        setName("");
        setDrees("");
        setPhone("");
        setImage("");
    }
    const [data, setData] = useState([]);

    const getAPI = () =>{
        fetch(API_Store)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

    }
    useEffect(()=>{
     getAPI();
    },[status])
     
    const Status = (stus) => {
        if (stus == 0) {
            return "Đóng cửa"
        } else if (stus == 1) {
            return "Mở cửa"
        }
    }
    const ColorStatus = (stus) => {
        if (stus == 0) {
            return "red"
        } else if (stus == 1) {
            return "green"
        }
    }
    return (
        <View style={{ padding: 20, marginTop:25 }}>

            <FlatList data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Details', { item, data })
                        }}>
                            <View style={{
                                flexDirection: "row", marginBottom: 20, padding: 10,
                                width: "100%", height: 120, borderWidth: 1, borderRadius: 8
                            }}>

                                <Image style={{
                                    height: 50, width: 50, borderRadius: 25, marginTop: 5
                                }}

                                    source={{ uri: item.Image }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                                    <View style={{ height: 1, backgroundColor: "black", width: "100%" }} />
                                    <Text>Dress: {item.drees}</Text>
                                    <Text>Phone: {item.phone}</Text>
                                  <View style={{ flexDirection: "row" }}>
                                        <Text>Status: </Text>
                                        <Text style={{ color: ColorStatus(item.status) }}>{Status(item.status)}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Add", { data, setData });
                }}
                style={{
                    width: 50, height: 50, borderRadius: 25,
                    backgroundColor: "red", position: "absolute", bottom: 20, right: 10,
                    alignItems: "center", justifyContent: "center"
                }}>
                <Image style={{ width: 20, height: 20 }} source={require("../assets/add.png")} />
            </TouchableOpacity>

        </View>

    )

}