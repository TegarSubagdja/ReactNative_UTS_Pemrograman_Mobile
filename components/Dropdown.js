import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from "../constant/Colors";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <View>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{
                    backgroundColor: Colors.graySecondary,
                }}
                textStyle={{
                    fontSize: 15,
                    color: Colors.white,
                }}
                dropDownContainerStyle={{
                    backgroundColor: Colors.graySecondary,
                }}
                dropDownIconContainerStyle={{
                    backgroundColor: Colors.graySecondary, // Sesuaikan warna latar belakang sesuai keinginan Anda
                }}
                dropDownIcon={<Image source={require('../assets/img/laravel.png')} style={styles.iconStyle} />} // Gunakan gambar sebagai ikon
            />

            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        height: 20,
        width: 20
    }
})

export default Dropdown;
