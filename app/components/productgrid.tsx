import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
const Black = require("../../assets/images/black.png");
const Blue = require("../../assets/images/blue.png");
const Grey = require("../../assets/images/grey.png");
const White = require("../../assets/images/white.png");

export default function ProductGrid() {
  const products = [
    { id: 1, name: "Blue", price: "$220.00" },
    { id: 2, name: "White", price: "$150.00" },
    { id: 3, name: "Black", price: "$180.00" },
    { id: 4, name: "Black", price: "$250.00" },
  ];

  return (
    <View style={styles.grid}>
      {/* Left column */}
      <View style={styles.column}>
        <View style={[styles.card, styles.tall, styles.bgblue]}>
          <Image source={Blue} style={styles.productImage} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {products[0].name}
              </Text>
              <Text style={{ fontSize: 12 }}>A apir</Text>
            </View>
            <Feather name="check-circle" size={24} color="white" />
          </View>
          <Text style={styles.price}>{products[0].price}</Text>
        </View>
        <View style={[styles.card, styles.short, styles.bgyellow]}>
          <Image source={Black} style={styles.productImage} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {products[2].name}
              </Text>
              <Text style={{ fontSize: 12 }}>A apir</Text>
            </View>
            <Feather name="check-circle" size={24} color="white" />
          </View>

          <Text style={styles.price}>{products[2].price}</Text>
        </View>
      </View>

      {/* Right column */}
      <View style={styles.column}>
        <View style={[styles.card, styles.short, styles.bglight]}>
          <Image source={White} style={styles.productImagewhite} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {products[1].name}
              </Text>
              <Text style={{ fontSize: 12 }}>A apir</Text>
            </View>
            <Feather name="check-circle" size={24} color="white" />
          </View>

          <Text style={styles.price}>{products[1].price}</Text>
        </View>
        <View style={[styles.card, styles.tall, styles.bgpink]}>
          <Image source={Grey} style={styles.productImagepink} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {products[3].name}
              </Text>
              <Text style={{ fontSize: 12 }}>A apir</Text>
            </View>
            <Feather name="check-circle" size={24} color="white" />
          </View>
          <Text style={styles.price}>{products[3].price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    gap: 24,
    marginTop: 50,
    // padding: 16,
  },
  column: {
    flex: 1,
    gap: 24,
  },
  card: {
    borderRadius: 16,
    padding: 12,
    overflow: "visible",
  },
  bgblue: {
    backgroundColor: "#42B1EF",
  },
  bgpink: {
    backgroundColor: "#FC64D1",
    borderRadius: 16,
  },
  bgyellow: {
    backgroundColor: "#ECEF42",
    borderRadius: 16,
  },
  bglight: {
    backgroundColor: "#7ACFFF",
  },
  tall: {
    height: 280, // bigger
  },
  short: {
    height: 230, // smaller
  },
  productImage: {
    position: "absolute",
    width: 200,
    height: "60%",
    zIndex: 2,
    top: "50%",
    left: "70%",
    // right: -100,
    transform: [{ translateX: -100 }, { translateY: -62.5 }],
  },
  productImagepink: {
    position: "absolute",
    width: 230,
    height: "70%",
    zIndex: 2,
    top: "60%",
    left: "60%",
    transform: [{ translateX: -100 }, { translateY: -65 }],
  },
  productImagewhite: {
    position: "absolute",
    width: 200,
    height: "80%",
    zIndex: 2,
    top: "60%",
    left: "70%",
    // right: -100,
    transform: [{ translateX: -100 }, { translateY: -62.5 }],
  },
  price: {
    position: "absolute",
    bottom: 12,
    right: 12,
    fontWeight: "bold",
    color: "black",
  },
});
