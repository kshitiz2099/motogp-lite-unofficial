import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        padding: 16,
        marginTop: 2,
        marginBottom: 2,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    positionContainer: {
        backgroundColor: '#CCC',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 16,
    },
    positionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    contentContainer: {
        flex: 1,
    },
    riderName: {
        fontSize: 18,
        marginBottom: 8,
        color: 'black'
    },
    bold: {
        fontWeight: 'bold',
    },
    teamName: {
        color: '#888',
    },
    pointsBox: {
        backgroundColor: '#EEE',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    pointsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
})