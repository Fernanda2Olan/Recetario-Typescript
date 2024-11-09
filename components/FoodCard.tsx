import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface foodCardProps {
  title: string;
  info: any;
}

const FoodCard: React.FC<foodCardProps> = ({ title, info }) => {
  return (
    <View>
      <Link
        href={{ pathname: "/foodPage", params: { info: JSON.stringify(info) } }}
      >
        <Text style={styles.title}>{title}</Text>
      </Link>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {},
  foodCardStyle: {},
  title: { marginTop: 10, fontWeight: "bold", textAlign: "center" },
});
