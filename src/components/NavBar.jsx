import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './../styles/NavBar.component.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

export default function NavBar(){

  const navigation = useNavigation();

  const goToSchedule = ()=>{
    navigation.navigate('Schedule');
  }
  const goToRacing = ()=>{
    navigation.navigate('Racing');
  }

  const goToStandings = ()=>{
    navigation.navigate('Standings');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem} onPress = {goToSchedule}>

        <Icon name = 'calendar-clock-outline' color = 'black' size = {50}/>
        <Text
          style={styles.navItemText}>
          Weekend Schedule
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem} onPress = {goToRacing}>

        <Icon name = 'flag-checkered' color = 'black' size = {50}/>

        <Text
          style={styles.navItemText}>
          Racing
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem} onPress = {goToStandings}>
        
        <Icon name = 'racing-helmet' color = 'black' size = {50}/>
        <Text
          style={styles.navItemText}>
          Standings
        </Text>

      </TouchableOpacity>
    </View>
  );
};