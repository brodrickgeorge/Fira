import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.name} size={80} />
      <AppText>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CategoryPickerItem;
