import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const recipePage = () => {
  const { recipe } = useLocalSearchParams();
  const recipeData = JSON.parse(recipe as string);

  const ingredientsList = recipeData.ingredients
    .split(",")
    .map((item: string) => item.trim());
  const recipeSteps = recipeData.recipe
    .split(".")
    .map((step: string) => step.trim())
    .filter((step: string) => step.length > 0);

  const data = [
    { type: "title", value: recipeData.name },
    { type: "image", value: recipeData.image },
    { type: "ingredients", value: ingredientsList },
    { type: "recipe", value: recipeSteps },
  ];

  const renderItem = ({ item }: { item: any }) => {
    if (item.type === "title") {
      return <Text style={styles.title}>{item.value}</Text>;
    }

    if (item.type === "image") {
      return <Image source={{ uri: item.value }} style={styles.image} />;
    }

    if (item.type === "ingredients") {
      return (
        <View>
          <Text style={styles.subTitle}>Ingredients:</Text>
          <FlatList
            data={item.value}
            renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
            keyExtractor={(item, index) => `ingredient-${index}`}
          />
        </View>
      );
    }

    if (item.type === "recipe") {
      return (
        <View>
          <Text style={styles.subTitle}>Recipe:</Text>
          <FlatList
            data={item.value}
            renderItem={({ item, index }) => (
              <Text style={styles.text}>{`${index + 1}. ${item}`}</Text>
            )}
            keyExtractor={(item, index) => `recipe-step-${index}`}
          />
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e9c2c5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  image: { width: "100%", height: 200, marginBottom: 16, borderRadius: 12 },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "justify",
    paddingHorizontal: 8,
  },
});

export default recipePage;
