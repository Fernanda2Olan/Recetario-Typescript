import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Categorías" }} />
      <Stack.Screen
        name="foodPage"
        options={{ title: "Recetas 🍽️" }}
      ></Stack.Screen>
    </Stack>
  );
}
