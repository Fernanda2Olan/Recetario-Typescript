import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const foodPage = () => {
  const { info } = useLocalSearchParams();
  const dataJson = Array.isArray(info) ? info[0] : info;
  const dataParser = JSON.parse(dataJson);

  return (
    <View style={styles.container}>
      {dataParser.Dishes && dataParser.Dishes.length > 0 ? (
        <FlatList
          numColumns={2}
          data={dataParser.Dishes}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                source={{
                  uri: item.imagen,
                }}
                style={styles.itemImage}
              />
              <Text style={styles.itemTitle}>{item.name}</Text>
            </View>
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
  item: {
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
});

export default foodPage;
