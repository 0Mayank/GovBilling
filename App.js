import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";

import tw from "twrnc";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import ShowInvoices from "./src/screens/ShowInvoices";
import Setting from "./src/screens/Setting";
import Dashboard from "./src/screens/Dashboard";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Home,
  BusFront,
  Ticket,
  User2Icon,
  Settings,
  FileText,
} from "lucide-react-native";
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <View style={tw`w-full h-full flex flex-col`}>
        <View style={tw`h-90%`}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: "15px" },
              tabBarStyle: {
                height: "10%",
                position: "fixed",
                bottom: "4px",
              },
            }}
            initialRouteName="Dashboard"
          >
            <Tab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                tabBarLabel: "Dashboard",
                tabBarIcon: ({ focused }) => {
                  return <Home color={focused ? "red" : "gray"} size={28} />;
                },
              }}
            />
            <Tab.Screen
              name="Signup"
              component={Signup}
              options={{
                tabBarLabel: "Signup",
                tabBarButton: () => null,
                tabBarVisible: false,
              }}
            />
            <Tab.Screen
              name="Setting"
              component={Setting}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ focused }) => {
                  return (
                    <Settings color={focused ? "red" : "gray"} size={28} />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Show Invoices"
              component={ShowInvoices}
              options={{
                tabBarLabel: "Show Invoices",
                tabBarIcon: ({ focused }) => {
                  return (
                    <FileText color={focused ? "red" : "gray"} size={28} />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Login"
              component={Login}
              options={{
                tabBarLabel: "Login",
                tabBarIcon: ({ focused }) => {
                  return (
                    <User2Icon color={focused ? "red" : "gray"} size={28} />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}
