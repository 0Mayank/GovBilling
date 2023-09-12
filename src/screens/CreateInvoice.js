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
  Alert,
  TextInput,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import { DataTable } from "react-native-paper";
import tw from "twrnc";
import InvoiceInfo from "../components/InvoiceInfo";
import PdfGenerator from "../components/PdfGenerator";

// import DatePicker from "react-native-date-picker";

const CreateInvoice = (props) => {
  const { width, height } = Dimensions.get("window");
  // console.log(width, height);

  const navigation = props.navigation;
  const [InvName, SetInvName] = useState("");
  const [InvDate, SetInvDate] = useState("");
  const [InvDsc, SetInvDsc] = useState([{ item: "", qty: 500, amt: null }]);
  const [total, setTotal] = useState(0);
  // const [InvAmt, SetInvAmt] = useState([]);
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
    Alert.alert("Invoice saved successfully");
    console.log("save");
  };

  const reset = () => {
    console.log("reset");
    Alert.alert("Are You Sure", "Are you sure you want to remove", [
      // The "Yes" button
      {
        text: "Yes",
        onPress: () => {
          SetInvName("");
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
      },
    ]);
  };

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <ScrollView>
      <View style={tw`h-full w-full bg-white p-4`}>
        <View style={tw`w-full border-2`}>
          <View style={tw`flex items-center justify-center w-full border-b-2`}>
            <TextInput
              style={tw` font-sans text-3xl font-bold text-center w-full `}
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
                <View style={tw`bg-blue-50 rounded-md p-3`}>
                  <View style={tw`flex flex-row my-1`}>
                    <Text style={tw`font-sans text-lg`}>Name : </Text>
                    <TextInput
                      style={tw`text-lg w-[80%]`}
                      value={InvToName}
                      onChangeText={(input) => SetInvToName(input)}
                    />
                  </View>
                  <View style={tw`flex flex-col my-1`}>
                    <Text style={tw` font-sans mb-2 text-lg`}>Address : </Text>
                    <View style={tw`pl-3`}>
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
                  </View>
                  <View>
                    <View style={tw`flex flex-row my-1`}>
                      <Text style={tw`font-sans text-lg`}>Phone : </Text>
                      <TextInput
                        style={tw`font-sans text-lg w-[80%]`}
                        value={InvToPhone}
                        onChangeText={(input) => SetInvToPhone(input)}
                      />
                    </View>
                    <View style={tw`flex flex-row my-1`}>
                      <Text style={tw`font-sans text-lg`}>Email : </Text>
                      <TextInput
                        style={tw`font-sans text-lg w-[80%]`}
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
                <View style={tw`bg-blue-50 rounded-md p-3`}>
                  <View style={tw`flex flex-row my-1`}>
                    <Text style={tw`font-sans text-lg`}>Name : </Text>
                    <TextInput
                      style={tw`w-[80%]`}
                      value={InvFromName}
                      onChangeText={(input) => SetInvFromName(input)}
                    />
                  </View>
                  <View style={tw` flex flex-col my-1`}>
                    <Text style={tw` font-sans mb-2 text-lg`}>Address : </Text>
                    <View style={tw`pl-3`}>
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
                  </View>
                  <View>
                    <View style={tw`flex flex-row my-1`}>
                      <Text style={tw`font-sans text-lg`}>Phone : </Text>
                      <TextInput
                        style={tw`font-sans text-lg w-[80%]`}
                        value={InvFromPhone}
                        onChangeText={(input) => SetInvFromPhone(input)}
                      />
                    </View>
                    <View style={tw`flex flex-row my-1`}>
                      <Text style={tw`font-sans text-lg`}>Email : </Text>
                      <TextInput
                        style={tw`font-sans text-lg w-[80%]`}
                        value={InvFromEmail}
                        onChangeText={(input) => SetInvFromEmail(input)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* DESCRIPTION TABLE START*/}
            <View>
              <Text
                style={tw`my-4 text-xl font-bold w-full border-b-2 border-blue-700`}
              >
                Description
              </Text>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={tw`flex-2`}>
                    <Text style={tw`font-semibold text-lg `}>Item</Text>
                  </DataTable.Title>
                  <DataTable.Title numeric style={tw`flex-2`}>
                    <Text style={tw`font-semibold text-lg `}>Quantity</Text>
                  </DataTable.Title>
                  <DataTable.Title numeric style={tw`flex-2`}>
                    <Text style={tw`font-semibold text-lg `}>Amount</Text>
                  </DataTable.Title>
                  <DataTable.Title
                    numeric
                    style={tw`flex-1 justify-self-end`}
                  ></DataTable.Title>
                </DataTable.Header>
                <FlatList
                  data={InvDsc}
                  renderItem={({ item, index }) => {
                    return (
                      <DataTable.Row key={index}>
                        <DataTable.Cell style={tw`flex-2`}>
                          <View style={tw`w-full`}>
                            <TextInput
                              style={tw`w-full`}
                              value={item.item}
                              onChangeText={(text) => {
                                SetInvDsc((prev) => {
                                  let newarr = [...prev];
                                  newarr[index].item = text;
                                  return newarr;
                                });
                              }}
                            />
                          </View>
                        </DataTable.Cell>

                        <DataTable.Cell
                          numeric
                          style={tw`flex-2 w-full border-red-200 border-2`}
                        >
                          <View style={tw`flex-1  border-blue-200 border-2`}>
                            <TextInput
                              style={tw`w-full text-center border-2`}
                              value={item.qty}
                              onChangeText={(text) => {
                                SetInvDsc((prev) => {
                                  let newarr = [...prev];
                                  newarr[index].qty = text;
                                  return newarr;
                                });
                              }}
                            />
                          </View>
                        </DataTable.Cell>
                        <DataTable.Cell
                          numeric
                          style={tw`flex-2 border-red-600 border-2`}
                        >
                          <View style={tw`w-full`}>
                            <TextInput
                              style={tw`w-full text-center`}
                              value={item.amt}
                              onChangeText={(text) => {
                                SetInvDsc((prev) => {
                                  let newarr = [...prev];
                                  newarr[index].amt = text;
                                  return newarr;
                                });
                              }}
                            />
                          </View>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`flex-1 justify-end`}>
                          <TouchableOpacity>
                            <Text
                              style={tw` p-2 text-center rounded-full bg-red-700 text-white `}
                            >
                              X
                            </Text>
                          </TouchableOpacity>
                        </DataTable.Cell>
                      </DataTable.Row>
                    );
                  }}
                />
              </DataTable>
              <Button
                title="add"
                onPress={() => {
                  SetInvDsc((prev) => {
                    console.log(prev);
                    let newarr = [...prev];
                    newarr.push({ item: "", qty: null, amt: null });
                    console.log(newarr);
                    return newarr;
                  });
                }}
              ></Button>
            </View>
            {/* DESCRIPTION TABLE END */}
          </View>
        </View>
        <View style={tw`flex flex-row justify-between px-4`}>
          <TouchableOpacity
            style={tw`bg-[#f6a192] w-fit px-[8px] py-[6px] my-2`}
            onPress={() => saveInvoice()}
          >
            <Text style={tw`w-fit`}>Save</Text>
          </TouchableOpacity>
          <PdfGenerator></PdfGenerator>
          <TouchableOpacity
            style={tw`bg-[#f6a192] w-fit px-[8px] py-[6px] my-2`}
            onPress={() => reset()}
          >
            <Text style={tw`w-fit`}>Reset</Text>
          </TouchableOpacity>
        </View>
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
