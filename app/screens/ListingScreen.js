import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import colors from "../config/colors";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Boruto",
    price: 100,
    image: require("../assets/anime/boruto.png"),
  },
  {
    id: 2,
    title: "Naruto",
    price: 50,
    image: require("../assets/anime/naruto.png"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});

export default ListingScreen;
