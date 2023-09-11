import react from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
// import Menu from "../components/Menu";

const Dashboard = (props) => {
  const navigation = props.navigation;
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <View style={tw`h-full w-full bg-white`}></View>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});

// console.log(ticketData);

export default Dashboard;
