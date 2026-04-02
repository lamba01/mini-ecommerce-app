import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ProductGrid from "../components/productgrid";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <Text style={styles.header}>nike store shoe</Text>
      <TextInput
        style={styles.input}
        placeholder="search"
        placeholderTextColor="#000000"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <ProductGrid />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    padding: 12,
    paddingLeft: 20,
    fontSize: 20,
    width: "100%",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
    marginTop: 20,
    color: "#121111",
  },
});
