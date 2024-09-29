import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { XStack } from "tamagui";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused: boolean;
}) {
  return (
    <XStack
      backgroundColor={props.focused ? "$gray12" : "$gray5"}
      padding="$2"
      paddingHorizontal="$5"
      borderRadius="$5"
      marginBottom="$-3"
    >
      <FontAwesome
        size={30}
        style={{ color: props.focused ? "#2E2E2E" : "#EDEDED" }}
        {...props}
      />
    </XStack>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 16,
          height: 70,
        },
      }}
      sceneContainerStyle={{ padding: 24 }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="book" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="user" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
