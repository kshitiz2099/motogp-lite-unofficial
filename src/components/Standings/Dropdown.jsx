import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Dropdown(){

    const [selectedClass, setClass] = useState('GP');

    const [isOpen, setOpen] = useState(false);

    return(
        <View>
            <TouchableOpacity><Text>MotoGP</Text></TouchableOpacity>
            <TouchableOpacity><Text>Moto2</Text></TouchableOpacity>
            <TouchableOpacity><Text>Moto3</Text></TouchableOpacity>
        </View>
    )
}