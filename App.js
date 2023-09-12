import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

import tw from "twrnc";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import CreateInvoice from "./src/screens/CreateInvoice";
import ShowInvoices from "./src/screens/ShowInvoices";
import Setting from "./src/screens/Setting";
import Dashboard from "./src/screens/Dashboard";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Home,
  User2Icon,
  Settings,
  FileText,
  FilePlus,
} from "lucide-react-native";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCc_J3FchniSd8rZl7jm-K2_qTKVFG1cwg",
  authDomain: "gov-billing.firebaseapp.com",
  projectId: "gov-billing",
  storageBucket: "gov-billing.appspot.com",
  messagingSenderId: "1082426233424",
  appId: "1:1082426233424:web:464b0cbd7cdfcc815ff755",
  measurementId: "G-KTM94TR01F",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default function App() {
  // const [app, setApp] = useState();
  // const [db, setDb] = useState();
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const [user, setUser] = useState(null);

  // useEffect(() => {}, []);

  useEffect(() => {
    // setApp(getAuth(app));
    // setDb(getFirestore(app));
    // Auth listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <NavigationContainer>
        <View style={tw`w-full h-full flex flex-col`}>
          <View style={tw`h-full`}>
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: {
                  fontSize: 15,
                  justifyContent: "center",
                  alignItems: "center",
                },
                tabBarStyle: {
                  height: "10%",
                  paddingBottom: 3,
                  // position: "fixed",
                  // bottom: 2,
                  // border: "2px solid black ",
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
                name="Create Invoice"
                component={CreateInvoice}
                options={{
                  tabBarLabel: "New Inv",
                  tabBarIcon: ({ focused }) => {
                    return (
                      <FilePlus color={focused ? "red" : "gray"} size={28} />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="Show Invoices"
                component={ShowInvoices}
                options={{
                  tabBarLabel: "Show Inv",
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
                  tabBarButton: () => null,
                  tabBarVisible: false,
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
            </Tab.Navigator>
          </View>
        </View>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
