import { YStack, Text, Button, XStack, ScrollView } from "tamagui";
import { Link, useRouter } from "expo-router";
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
  const router = useRouter();
  const [statsPeriod, setStatsPeriod] = useState<StatsPeriod>("weekly");

  return (
    <ScrollView padding="$5" gap="$5">
      <Text fontSize={32} fontWeight={"bold"}>
        Your estimated CO2 emission level
      </Text>
      <XStack
        borderBottomColor="$gray5"
        borderBottomWidth={1}
        justifyContent="space-between"
      >
        <Text
          padding={12}
          onPress={() => setStatsPeriod("weekly")}
          borderBottomColor="$gray12"
          borderBottomWidth={statsPeriod === "weekly" ? 3 : 0}
        >
          WEEKLY
        </Text>
        <Text
          padding={12}
          onPress={() => setStatsPeriod("monthly")}
          borderBottomColor="$gray12"
          borderBottomWidth={statsPeriod === "monthly" ? 3 : 0}
        >
          MONTHLY
        </Text>
        <Text
          padding={12}
          onPress={() => setStatsPeriod("yearly")}
          borderBottomColor="$gray12"
          borderBottomWidth={statsPeriod === "yearly" ? 3 : 0}
        >
          YEARLY
        </Text>
      </XStack>
      <YStack gap={32} marginTop={32}>
        <StatsCard
          description={"Monthly, you are creating about"}
          data={CO2Data[statsPeriod].data}
          color={"red"}
        />
        <StatsCard
          description={"To compensate that you will need to plant"}
          data={CO2Data.tree.data}
          color={"green"}
        />
      </YStack>
      <YStack marginTop={32} marginBottom={16}>
        <Button
          borderRadius={7}
          backgroundColor={"$gray12"}
          color={"$gray1"}
          fontSize={14}
          width={"100%"}
          onPress={() => {
            router.push("/(tabs)/Home");
          }}
        >
          WHAT IS MY PURPOSE?
        </Button>
        <Link
          href={"/(onboarding)/"}
          style={{
            color: "#369EFF",
            fontSize: 14,
            width: "100%",
            textAlign: "center",
            verticalAlign: "middle",
            padding: 12,
            textDecorationLine: "underline",
          }}
        >
          EDIT YOUR ANSWERS
        </Link>
      </YStack>
    </ScrollView>
  );
}
