import { View, Text } from "react-native";
import React from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { Button } from "react-native";

const html = `
<html>
<body>
<p>My name is Rohit</p>
</body>
</html>
`;
const generatePDF = async () => {
  const file = await printToFileAsync({
    html: html,
    base64: false,
  });
  await shareAsync(file.uri);
};
const PdfGenerator = () => {
  return (
    <View>
      <Button title="Generate Pdf" onPress={() => generatePDF()} />
    </View>
  );
};

export default PdfGenerator;
