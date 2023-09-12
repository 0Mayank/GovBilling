import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { ScrollView } from "react-native";

const Login = (props) => {
  const [email, set_email] = useState("");
  const [password, set_pass] = useState("");
  const Submit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        Alert.alert("Username or password Is in correct");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={tw`flex-1 flex-col bg-white items-center justify-center relative mb-3`}
        >
          <View>
            <View
              style={tw`flex items-center h-[300px] w-[300px] aspect-auto p-9`}
            >
              <Image
                style={tw`w-full h-full `}
                source={require("../../assets/Billing_Logo.png")}
              />
              {/* <Text style={{ fontSize: 40, color: "#5509be" }}>Welcome Back</Text> */}
            </View>
            <View style={tw`mb-4`}>
              <Text style={tw`block text-gray-700 text-xl font-bold mb-2`}>
                Username / E-Mail{" "}
              </Text>
              <TextInput
                style={tw`border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                autoCapitalize="none"
                value={email}
                onChangeText={(input) => {
                  set_email(input);
                }}
              />
            </View>
            <View style={tw`relative mb-4`}>
              <Text style={tw`block text-gray-700 text-xl font-bold mb-2`}>
                password
              </Text>
              <TextInput
                style={tw`border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                onChangeText={(input) => {
                  set_pass(input);
                }}
              />
              <Text
                style={tw`absolute text-gray-400 -bottom-5 right-0 text-sm`}
              >
                Forgot Your password ?
              </Text>
            </View>
            <View style={tw`flex flex-col items-center justify-center`}>
              {/* <Checkbox checked={false} onChange={()=>{}}/> */}
              <TouchableOpacity
                onPress={() => {
                  Submit();
                }}
              >
                <Text
                  style={tw` w-40 text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center m-3`}
                >
                  Login
                </Text>
              </TouchableOpacity>

              <Text style={tw`relative text-base`}>
                Do Not Have a Account ?{" "}
                <TouchableOpacity
                  // style={tw`absolute`}
                  onPress={() => {
                    props.navigation.navigate("Signup");
                  }}
                >
                  <Text style={tw`text-base text-blue-700`}>Signup</Text>
                </TouchableOpacity>
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Dashboard");
                }}
              >
                <Text style={tw`text-base text-blue-700`}>
                  Sign-In as Guest{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
