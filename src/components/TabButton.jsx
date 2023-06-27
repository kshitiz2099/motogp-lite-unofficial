import React from 'react';
import styles from './../styles/NavBar.component.style';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function TabButton(props){

    const target = props.to.slice(1);
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            style={styles.navItem} onPress={() =>navigation.navigate(target)}>

            {/* <Icon name = 'calendar-clock-outline' color = {scheduleColor} size = {50}/> */}
            <Text
            style={[styles.navItemText]}>
            {target}
            </Text>

        </TouchableOpacity>
    )
}