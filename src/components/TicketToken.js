import { View, Text, Touchable } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { TouchableOpacity } from "react-native";
import PdfGenerator from "./PdfGenerator";
import { FileEdit } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const TicketToken = (props) => {
  const navigation = useNavigation();
  const data = props.data;
  // const date = new Date(props.data.date);
  // //   console.log(typeof date);

  // //   console.log(date);
  // const disp_date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  // const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <View style={tailwind` shadow-xl rounded-lg  m-4`}>
      <View
        style={tailwind`flex flex-row rounded-md justify-center items-center px-2 py-1 bg-[#ACF35C]`}
      >
        <Text style={tailwind`text-xl font-bold text-black`}>
          {data.invoiceName}
        </Text>
      </View>
      <View
        style={tailwind`px-3 py-3 bg-white  w-full flex flex-col justify-between`}
      >
        <View style={tailwind`pb-4`}>
          <Text style={tailwind`font-bold text-xl text-black`}>
            Invoice No : {data.invoiceNumber}
          </Text>
        </View>
        <View style={tailwind`w-full flex flex-row justify-between mb-2`}>
          <View style={tailwind`flex flex-col justify-center items-center`}>
            <Text style={tailwind`text-base`}>Innvoice Date</Text>
            <Text style={tailwind`text-lg font-semibold`}>{data.date}</Text>
          </View>
          <View style={tailwind`flex flex-col justify-center items-center`}>
            <Text style={tailwind`text-base`}>Total Amount</Text>
            <Text style={tailwind`text-lg font-semibold`}>₹ {data.total}</Text>
          </View>
          {/* <View style={tailwind`flex flex-col`}>
            <Text style={tailwind`text-base`}>Innvoice Date</Text>
            <Text style={tailwind`text-lg font-semibold`}>{data.date}</Text>
          </View> */}
          {/* <Text style={tailwind`text-lg`}>Time : {time}</Text>
          <Text style={tailwind`text-lg`}>Start : {data.source}</Text>
          <Text style={tailwind`text-lg`}>End : {data.destination}</Text> */}
        </View>
        <View style={tailwind`w-full flex flex-row justify-between`}>
          <PdfGenerator items={data} />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Create Invoice", {
                id: props.id,
                data: data,
                edit: true,
              });
            }}
            style={tailwind`shadow-md rounded-md flex flex-row  items-center justify-center px-4 py-2 bg-[#3F94EF]`}
          >
            <FileEdit color="white" />
            <Text style={tailwind`text-white px-1`}>Edit</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={tailwind`flex flex-col items-end`}>
          <Text style={tailwind`text-lg`}>₹ {data.price}</Text>
          <Text style={tailwind`text-lg`}> x {data.qty}</Text>
          <Text style={tailwind`text-lg`}>₹ {data.price * data.qty}</Text>
        </View> */}
      </View>
    </View>
  );
};

export default TicketToken;
