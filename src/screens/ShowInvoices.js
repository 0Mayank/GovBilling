import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import TicketToken from "../components/TicketToken";
import tailwind from "twrnc";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const InvoiceData = [
  {
    id: 1,
    InvoiceNumber: "#7624",
    InvoiceName: "Cricket Bill",
    date: "20/017/2023",
    total: "2000",
    owner: "sauygausjas567",
    toData: {
      Name: "Rohit",
      Street: "Tigri",
      Address: "Tughlakabad",
      Zip: "110062",
      Email: "ram@gmail34.cm",
      Phone: "70923632",
    },
    fromData: {
      Name: "Roham",
      Street: "Dwarka mor",
      Address: "Dwarka sec-8",
      Zip: "110073",
      Email: "rohan235@yaj.com.cm",
      Phone: "70923632",
    },
    description: [
      { item: "Bat", amt: "300", qty: "2" },
      { item: "Ball", amt: "50", qty: "5" },
      { item: "Pad", amt: "400", qty: "2" },
    ],
  },
  {
    id: 2,
    InvoiceNumber: "#3424",
    InvoiceName: "Party Bill",
    date: "20/017/2023",
    total: "2000",
    owner: "sauygausjas567",
    to: {
      Name: "Rohit",
      Street: "Tigri",
      Address: "Tughlakabad",
      Zip: "110062",
      Email: "ram@gmail34.cm",
      Phone: "70923632",
    },
    from: {
      Name: "Roham",
      Street: "Dwarka mor",
      Address: "Dwarka sec-8",
      Zip: "110073",
      Email: "rohan235@yaj.com.cm",
      Phone: "70923632",
    },
    description: [
      { item: "Paneer", amt: "300", qty: "2" },
      { item: "Ball", amt: "50", qty: "5" },
      { item: "Pad", amt: "400", qty: "2" },
    ],
  },
];

const ShowInvoices = () => {
  console.log("");
  const auth = getAuth();
  return (
    <View style={tailwind` h-full w-full bg-white`}>
      <FlatList
        style={tailwind`pb-3`}
        data={InvoiceData}
        renderItem={({ item }) => <TicketToken data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ShowInvoices;
