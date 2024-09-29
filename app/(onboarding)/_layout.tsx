import Stack from "expo-router/build/layouts/Stack";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        title: "Register",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerBackButtonMenuEnabled: false }}
      />
      <Stack.Screen name="TransportType" />
      <Stack.Screen name="TransportDuration" />
      <Stack.Screen name="Stats" />
    </Stack>
  );
}
