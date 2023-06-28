import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { getRiderStandings } from './../../services/StandingsService';
import RiderCard from './RiderCard';

export default function RiderStandings(){

    const [standings, setRiderStandings] = useState([]);

    const fetchRiderStandings = async () => {
        try {
          const standings = await getRiderStandings();
          setRiderStandings(standings);
        } catch (error) {
          console.error('Error fetching rider standings:', error);
        }
      };

    useEffect(()=>{
        fetchRiderStandings();
        console.log("Populating...");
    }, [standings===null]);

    return(
        <ScrollView style = {{backgroundColor: 'black'}}>
            
            {standings.map((rider, index) =>(
                <RiderCard rider = {rider} position = {index+1} key = {index}/>
            ))}

        </ScrollView>
    )
}