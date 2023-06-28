import React from 'react';
import { View, Text } from 'react-native';
import styles from './../../styles/RiderCard.component.style';

export default function RiderCard({rider, position}){
    return (
        <View style={styles.card}>

            <View style={styles.positionContainer}>
                <Text style={styles.positionText}>{position}</Text>
            </View>

            <View style = {styles.vecticalDivider}></View>
            <View style={styles.contentContainer}>
                <Text style={styles.riderName}>
                    {rider.firstName} <Text style = {styles.bold}>{rider.lastName}</Text>
                </Text>

                <Text style={styles.teamName}>{rider.team}</Text>
            </View>

            <View style={styles.pointsBox}>
                <Text style={styles.pointsText}>{rider.points}</Text>
            </View>
      </View>
      );
}