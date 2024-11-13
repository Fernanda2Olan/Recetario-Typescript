import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Categorys" }} />
      <Stack.Screen
        name="foodPage"
        options={{ title: "Recipes 🍽️" }}
      ></Stack.Screen>
      <Stack.Screen
        name="recipePage"
        options={{ title: "Recipe Details" }}
      ></Stack.Screen>
    </Stack>
  );
}
