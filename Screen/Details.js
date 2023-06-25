import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { icon } from '../conten';
import FiveStar from './FiveStar';
import { API_Store } from '../API/StoreAPI';
export default function Details(props) {
    const route = useRoute();
    const navigation = props.navigation;

    const { item, data, setData } = route.params;
    const onDelete = (idItem) => {
        fetch(API_Store + "/" + idItem, {
            method: 'DELETE',
        }).catch((error) => { console.error(error) });
    }
    const onEdit = (idItem) => {
        fetch(API_Store + "/" + idItem)
            .then(res => res.json())
            .then(data => navigation.navigate('Edit', { item: data }))

    }
    const onFollow = () => {
        if (item.follow > 0) {
            return item.follow;
        } else {
            return 0;
        }
    }
    return (
        <View style={{}}>
            <View style={{
                flexDirection: "row", backgroundColor: '#ff8c00', height: 85,
            }}>
                <Image
                    style={{
                        height: 60, width: 60, borderRadius: 30, alignSelf: 'center',
                        marginLeft: 15
                    }}

                    source={{ uri: item.Image }} />
                <View style={{}}>


                    <Text style={{
                        marginTop: 10, fontSize: 18, fontWeight: "bold", marginLeft: 10, marginTop: 15,
                        color: "white"
                    }}>{item.name}</Text>
                    <Text style={{
                        fontSize: 12, marginLeft: 10, color: "white"
                    }}>{onFollow()}K người theo dõi</Text>
                    <View style={{
                        flexDirection: "row", backgroundColor: "white", width: 60, marginLeft: 10,
                        padding: 2, borderRadius: 10,
                        marginTop: 5, alignItems: "center", justifyContent: "center",
                    }}>
                        <FiveStar numberStar={item.star} />
                    </View>


                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: "row", marginVertical: 10, marginTop: 18 }}>
                    <TouchableOpacity
                        onPress={() => {
                            // navigation.navigate("Edit", {item , data })
                            onEdit(item.id)


                        }}
                        style={{
                            width: "80%",
                            backgroundColor: "gray",
                            alignItems: "center",
                            borderRadius: 10,
                            marginRight: 10,
                            justifyContent: "center",
                            flexDirection: "row",
                        }}>
                        <Image style={{
                            width: 15, height: 15, tintColor: "white",
                            marginRight: 10
                        }} source={icon.edit} />
                        <Text style={{ paddingVertical: 6, color: "white" }}>Chỉnh sửa cửa hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert("Thong bao", "Ban co chan chan muon xoa khong ?", [
                                {
                                    text: "Cancel"
                                }, {
                                    text: "Ok",
                                    onPress: () => {
                                        onDelete(item.id)
                                        navigation.goBack();
                                    }
                                }
                            ]);


                            // navigation.navigate("QuanLy");



                        }}
                        style={{
                            flex: 1,
                            backgroundColor: "red",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                        }}>
                        <Image style={{ width: 15, height: 15, tintColor: "white" }} source={icon.delete} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 10, width: "100%", backgroundColor: "#dcdcdc", marginTop: 10 }} />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>Chi tiết</Text>

                <View style={{
                    flexDirection: "row", marginTop: 10, justifyContent: "flex-start",
                }}>
                    <Image style={{ width: 20, height: 20, tintColor: "gray" }} source={icon.dress} />
                    <Text style={{ marginLeft: 8 }}>Dress: {item.drees}</Text>
                </View>
                <View style={{
                    flexDirection: "row", marginTop: 10, justifyContent: "flex-start",
                }}>
                    <Image style={{ width: 20, height: 20, tintColor: "gray" }} source={icon.phone} />
                    <Text style={{ marginLeft: 8 }}>Phone: {item.phone}</Text>
                </View>
            </View>
        </View>

    )

}