import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen name="(auth)/signup/page" />

      <Stack.Screen name="(panel)/profile/page" />
    </Stack>
  );
}
