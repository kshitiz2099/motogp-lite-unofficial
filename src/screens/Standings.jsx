import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import RiderStandings from '../components/Standings/RiderStandings';
import TeamStandings from '../components/Standings/TeamStandings';
import RaceResults from '../components/Standings/RaceResults';

export default function Standings() {
    
    const StandingsTab = createMaterialTopTabNavigator();

    return (
        <StandingsTab.Navigator
            screenOptions = {
                {
                    tabBarActiveTintColor: "white",
                    tabBarLabelStyle: {
                        fontWeight: "bold",
                        fontSize: 15
                    },tabBarStyle: {
                        backgroundColor: "red",
                    },
                    tabBarIndicatorStyle:{
                        backgroundColor: 'white',
                    }
                }}>
            <StandingsTab.Screen name="Riders" component={RiderStandings} />
            <StandingsTab.Screen name="Teams" component={TeamStandings} />
            <StandingsTab.Screen name="Results" component={RaceResults} />
        </StandingsTab.Navigator>
    );
}