import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      height: "10%",
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    navItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    activeNavItem: {
      backgroundColor: '#ccc',
    },
    navItemText: {
      fontSize: 12,
      color: 'black'
    },
    activeNavItemText: {
      color: 'rgb(255,0,0)',
    },
  });