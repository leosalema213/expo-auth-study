import { router, Stack } from "expo-router";
import { Authprovider, useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function RoootLayout() {
  return (
    <Authprovider>
      <MainLayout />
    </Authprovider>
  );
}

export function MainLayout() {
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session?.user);

      if (session) {
        setAuth(session.user);
        router.replace("/(panel)/profile/page");
        return;
      }

      setAuth(null);
      router.replace("/(auth)/signin/page");
    });
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen name="(auth)/signup/page" />

      <Stack.Screen name="(auth)/signin/page" />

      <Stack.Screen name="(panel)/profile/page" />
    </Stack>
  );
}
