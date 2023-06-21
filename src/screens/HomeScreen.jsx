import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLOURS, Items } from "../database/Database";
import Entrypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == "product") {
        productList.push(Items[index]);
      } else if (Items[index].category == "accessory") {
        accessoryList.push(Items[index]);
      }
    }
    setProducts(productList);
    setAccessory(accessoryList);
  };

  //   create an product resusable card
  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Image
            source={data.productImage}
            style={{
              width: "80%",
              height: "80%",
              resizeMode: "contain",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#8d99ae" }}>LKR {data.productPrice}.00</Text>
          <Text>Qty : {data.quantities}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: COLOURS.white }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity>
            <Entrypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 15,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 15,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: COLOURS.backgroundLight,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10, padding: 16 }}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: "600",
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            DataBox Technologies
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: "600",
              lineHeight: 24,
            }}
          >
            Technology shop offers both products and services
          </Text>
        </View>

        {/* Product List  */}
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                37
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {products.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        {/* Accessories List*/}
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                55
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {accessory.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
