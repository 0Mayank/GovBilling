import React from "react";
import { View, Text, FlatList } from "react-native";
import TicketToken from "../components/TicketToken";

const ticketData = [
  {
    id: 1,
    status: "valid",
    type: "Non-AC",
    routeNo: 725,
    busNo: "HP-3462",
    price: 50,
    date: new Date(),
    source: "Janak Puri",
    destination: "NSUT Dwarka",
    qty: 1,
  },
  {
    id: 2,
    status: "valid",
    type: "AC",
    routeNo: 345,
    busNo: "HP-3462",
    price: 100,
    date: new Date(),
    source: "Pragati Maidan",
    destination: "Saket",
    qty: 2,
  },
];

const ShowInvoices = () => {
  return (
    <View>
      <FlatList
        data={ticketData}
        renderItem={({ item }) => <TicketToken data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ShowInvoices;
