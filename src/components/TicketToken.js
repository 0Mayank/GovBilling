import { View, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

const TicketToken = (props) => {
  console.log(props.data);
  const data = props.data;
  const date = new Date(props.data.date);
  //   console.log(typeof date);

  //   console.log(date);
  const disp_date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <View style={tailwind`m-2 rounded border-2 border-black`}>
      <View
        style={tailwind`flex flex-row justify-between items-center px-2 py-1 bg-${
          data.type == "AC" ? `red-700` : `green-700`
        }`}
      >
        <Text style={tailwind`text-white`}>{data.routeNo}</Text>
        <Text style={tailwind`text-white`}>{data.busNo}</Text>
      </View>
      <View style={tailwind`px-3 flex flex-row justify-between`}>
        <View>
          <Text style={tailwind`text-lg font-semibold`}>
            Date : {disp_date}
          </Text>
          <Text style={tailwind`text-lg`}>Time : {time}</Text>
          <Text style={tailwind`text-lg`}>Start : {data.source}</Text>
          <Text style={tailwind`text-lg`}>End : {data.destination}</Text>
        </View>
        <View style={tailwind`flex flex-col items-end`}>
          <Text style={tailwind`text-lg`}>₹ {data.price}</Text>
          <Text style={tailwind`text-lg`}> x {data.qty}</Text>
          <Text style={tailwind`text-lg`}>₹ {data.price * data.qty}</Text>
        </View>
      </View>
    </View>
  );
};

export default TicketToken;
