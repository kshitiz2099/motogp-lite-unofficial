import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import WeekendSchedule from "../screens/WeekendSchedule";
import Racing from "../screens/Racing";
import StandingsRouter from "./StandingsRouter";
import { View, Text } from "react-native";
import styles from '../styles/NavBar.component.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainRouter(){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            screenOptions = {{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'rgb(150,150,150)',
                tabBarStyle: {height: "7%"},
                headerStyle: {backgroundColor: 'red', elevation: 0},
                headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            }}>

            <Tab.Screen name  = "Schedule" component = {WeekendSchedule}
                options={{
                    tabBarLabel: (props) => <Text style = {{color: props.color, fontSize: 12, paddingBottom: 5}}>Schedule</Text>,
                    tabBarIcon: (props) =>  <View style = {{paddingTop: 5}}><Icon name = 'calendar-clock-outline' color = {props.color} size = {30}/></View>,
                }}/>

            <Tab.Screen name  = "Racing" component = {Racing}
                options={{
                    tabBarLabel: (props) => <Text style = {{color: props.color, fontSize: 12, paddingBottom: 5}}>Racing</Text>,
                    tabBarIcon: (props) =>  <View style = {{paddingTop: 5}}><Icon name = 'flag-checkered' color = {props.color} size = {30}/></View>,
                }}/>
            <Tab.Screen name  = "Standings" component = {StandingsRouter}
                options={{
                    tabBarLabel: (props) => <Text style = {{color: props.color, fontSize: 12, paddingBottom: 5}}>Standings</Text>,
                    tabBarIcon: (props) =>  <View style = {{paddingTop: 5}}><Icon name = 'racing-helmet' color = {props.color} size = {30}/></View>,
                }}/>
        </Tab.Navigator>
    )
}