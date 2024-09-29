import { YStack, Text, Button, XStack, ScrollView } from "tamagui";
import { Link } from "expo-router";
import { useState } from "react";
import { StatsCard } from "@/components/StatsCard";

type StatsPeriod = "weekly" | "monthly" | "yearly";

const CO2Data = {
  weekly: {
    data: 163,
  },
  monthly: {
    data: 652,
  },
  yearly: {
    data: 7822,
  },
  tree: {
    data: 357,
  },
};
export default function Stats() {
  return (
    <ScrollView>
      <XStack
        width={"90%"}
        borderColor={"$gray5"}
        borderBottomWidth={1}
        marginHorizontal="auto"
        paddingVertical={16}
      >
        <Text fontSize={32} fontWeight={"bold"}>
          Hello, Stefan!
        </Text>
      </XStack>
    </ScrollView>
  );
}
