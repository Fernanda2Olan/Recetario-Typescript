import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const foodPage = () => {
  const router = useRouter();
  const { info } = useLocalSearchParams();
  const dataJson = Array.isArray(info) ? info[0] : info;
  const dataParser = JSON.parse(dataJson);

  return (
    <View style={styles.container}>
      <Text style={styles.mealTimeSTyles}>
        Typical meal time: {dataParser.Typical_Meal_Time}
      </Text>
      <Text style={styles.ingredientStyle}>
        Popular ingredients: {dataParser.Popular_Ingredients}
      </Text>
      {dataParser.Dishes.length > 0 ? (
        <FlatList
          numColumns={2}
          data={dataParser.Dishes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemm}
              onPress={() =>
                router.push({
                  pathname: "/recipePage",
                  params: { recipe: JSON.stringify(item) },
                })
              }
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.itemImage}
              />
              <Text style={styles.itemTitle}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Platillos no disponibles</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#FEE1DD" },
  itemm: {
    flex: 1,
    height: 170,
    margin: 10,
    padding: 10,
    backgroundColor: "#e9c2c5",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: { width: 130, height: 110, borderRadius: 8 },
  itemTitle: { marginTop: 10, fontWeight: "bold", textAlign: "center" },
  mealTimeSTyles: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    padding: 10,
    textAlign: "center",
  },
  ingredientStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
});

export default foodPage;
