import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WeekendSchedule from '../screens/WeekendSchedule';
import Standings from '../screens/Standings';
import Racing from '../screens/Racing';

export default function Router(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name  ="Schedule" component = {WeekendSchedule}/>
            <Stack.Screen name  ="Racing" component = {Racing}/>
            <Stack.Screen name  ="Standings" component = {Standings}/>
        </Stack.Navigator>
    )
}