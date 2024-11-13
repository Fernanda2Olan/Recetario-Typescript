import FoodCard from "@/components/FoodCard";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [categoria, setCategoria] = useState<{ key: string; info: any }[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const dataJson = require("@/data/cuosines.json");
      setCategoria(
        Object.keys(dataJson).map((key) => ({
          key,
          info: dataJson[key],
        }))
      );
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={categoria}
        keyExtractor={(item) => item.key}
        renderItem={(itemData) => (
          <View style={styles.foodCardStyles}>
            <FoodCard
              title={itemData.item.info.Title}
              info={itemData.item.info}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FEE1DD",
  },
  foodCardStyles: {
    flex: 1,
    height: 150,
    margin: 10,
    backgroundColor: "#e9c2c5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
