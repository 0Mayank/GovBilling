import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import tw from "twrnc";
import { TextInput, ScrollView } from "react-native";
import InvoiceInfo from "../components/InvoiceInfo";

// import DatePicker from "react-native-date-picker";

const CreateInvoice = (props) => {
  const { width, height } = Dimensions.get("window");
  // console.log(width, height);

  const navigation = props.navigation;
  const [InvName, SetInvName] = useState("");
  const [InvDate, SetInvDate] = useState("");
  const [InvDsc, SetInvDsc] = useState([]);
  const [InvNo, SetInvNo] = useState();
  // From
  const [InvFromName, SetInvFromName] = useState("");
  const [InvFromStreet, SetInvFromStreet] = useState("");
  const [InvFromAddress, SetInvFromAddress] = useState("");
  const [InvFromZip, SetInvFromZip] = useState();
  const [InvFromEmail, SetInvFromEmail] = useState("");
  const [InvFromPhone, SetInvFromPhone] = useState("");
  // To
  const [InvToName, SetInvToName] = useState("");
  const [InvToStreet, SetInvToStreet] = useState("");
  const [InvToAddress, SetInvToAddress] = useState("");
  const [InvToZip, SetInvToZip] = useState();
  const [InvToEmail, SetInvToEmail] = useState("");
  const [InvToPhone, SetInvToPhone] = useState("");

  // const [gettoChildData, setGettoChildData] = useState({});
  // const [getfromChildData, setGetfromChildData] = useState({});

  const saveInvoice = () => {
    // setGettoChildData();
    const inv_no = InvNo;
    const inv_name = InvName;
    const toData = {
      InvToName,
      InvToStreet,
      InvToAddress,
      InvToZip,
      InvToEmail,
      InvToPhone,
    };
    const fromData = {
      InvFromName,
      InvFromStreet,
      InvFromAddress,
      InvFromZip,
      InvFromEmail,
      InvFromPhone,
    };
    console.log(inv_no, inv_name, toData, fromData);
    // setGetfromChildData();
    // const fromchildData = getfromChildData;
    // console.log(tochildData);
    // console.log(fromchildData);
    console.log("save");
  };

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <ScrollView>
      <View style={tw`h-full w-full bg-white p-4`}>
        <View style={tw`w-full border-2`}>
          <View style={tw`flex items-center justify-center w-full border-b-2`}>
            <TextInput
              style={tw` font-sans text-3xl font-bold text-center`}
              placeholder="INVOICE"
              value={InvName}
              onChangeText={(input) => SetInvName(input)}
            />
          </View>
          <View style={tw`w-full p-2`}>
            <View style={tw` relative w-full flex flex-row justify-between `}>
              <View
                style={tw` box-border w-[50%] flex flex-row my-2 items-center `}
              >
                <Text style={tw`text-lg font-sans `}>Invoice No : </Text>
                <TextInput
                  style={tw`w-[29%]  p-1`}
                  value={InvNo}
                  onChangeText={(input) => {
                    SetInvNo(input);
                  }}
                ></TextInput>
              </View>
              <View style={tw`box-border w-[50%] flex flex-row my-2`}>
                <Text style={tw`text-lg font-sans`}>Date : </Text>
                <TextInput
                  style={tw`w-25  p-1`}
                  value={InvDate}
                  onChangeText={(input) => SetInvDate(input)}
                />
                {/* <DatePicker mode="date" /> */}
              </View>
            </View>

            <View
              style={tw`w-full flex ${
                width >= 650 ? `flex-row justify-between` : `flex-col`
              }`}
            >
              <View style={tw`${width >= 650 ? `w-1/2 px-4` : `w-full`}`}>
                <Text
                  style={tw`my-4 text-xl font-bold w-full border-b-2 border-blue-700`}
                >
                  BILL TO :
                </Text>
                <View style={tw`bg-blue-50 rounded-md p-1`}>
                  <View style={tw`flex flex-row my-1`}>
                    <Text style={tw`font-sans text-lg`}>Name : </Text>
                    <TextInput
                      value={InvToName}
                      onChangeText={(input) => SetInvToName(input)}
                    />
                  </View>
                  <View style={tw` flex flex-col my-1`}>
                    <Text style={tw` font-sans mb-2 text-lg`}>Address : </Text>
                    <TextInput
                      style={tw` font-sans text-lg`}
                      placeholderStyle={tw`text-red-600`}
                      placeholder="Street Adress"
                      value={InvToStreet}
                      onChangeText={(input) => SetInvToStreet(input)}
                    />
                    <TextInput
                      style={tw`font-sans text-lg`}
                      placeholder="City, State"
                      value={InvToAddress}
                      onChangeText={(input) => SetInvToAddress(input)}
                    />
                    <TextInput
                      style={tw` font-sans text-lg`}
                      placeholder="Zip"
                      value={InvToZip}
                      onChangeText={(input) => SetInvToZip(input)}
                    />
                  </View>
                  <View>
                    <View style={tw`flex flex-row my-1`}>
                      <Text style={tw`font-sans text-lg`}>Phone : </Text>
                      <TextInput
                        style={tw`font-sans text-lg`}
                        placeholder="Phone"
                        value={InvToPhone}
                        onChangeText={(input) => SetInvToPhone(input)}
                      />
                    </View>
                    <View style={tw`flex flex-row my-1`}>
                      <Text style={tw`font-sans text-lg`}>Email : </Text>
                      <TextInput
                        style={tw`font-sans text-lg`}
                        placeholder="Email"
                        value={InvToEmail}
                        onChangeText={(input) => SetInvToEmail(input)}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={tw`${width >= 650 ? `w-1/2 px-4` : `w-full`}`}>
                <Text
                  style={tw`my-4 text-xl font-bold w-full border-b-2 border-blue-700`}
                >
                  FROM :
                </Text>
                <View style={tw`bg-blue-50 rounded-md p-1`}>
                  <View style={tw`flex flex-row my-1`}>
                    <Text style={tw`font-sans text-lg`}>Name : </Text>
                    <TextInput
                      value={InvFromName}
                      onChangeText={(input) => SetInvFromName(input)}
                    />
                  </View>
                  <View style={tw` flex flex-col my-1`}>
                    <Text style={tw` font-sans mb-2 text-lg`}>Address : </Text>
                    <TextInput
                      style={tw` font-sans text-lg`}
                      placeholderStyle={tw`text-red-600`}
                      placeholder="Street Adress"
                      value={InvFromStreet}
                      onChangeText={(input) => SetInvFromStreet(input)}
                    />
                    <TextInput
                      style={tw`font-sans text-lg`}
                      placeholder="City, State"
                      value={InvFromAddress}
                      onChangeText={(input) => SetInvFromAddress(input)}
                    />
                    <TextInput
                      style={tw` font-sans text-lg`}
                      placeholder="Zip"
                      value={InvFromZip}
                      onChangeText={(input) => SetInvFromZip(input)}
                    />
                  </View>
                  <View>
                    <TextInput
                      style={tw`font-sans text-lg`}
                      placeholder="Phone"
                      value={InvFromPhone}
                      onChangeText={(input) => SetInvFromPhone(input)}
                    />
                    <TextInput
                      style={tw`font-sans text-lg`}
                      placeholder="Email"
                      value={InvFromEmail}
                      onChangeText={(input) => SetInvFromEmail(input)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={tw`bg-[#f6a192] w-fit px-[8px] py-[6px] my-2`}
          onPress={() => saveInvoice()}
        >
          <Text style={tw`w-fit`}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default CreateInvoice;
