import { YStack, Text } from "tamagui";

type StatsCardProps = {
  description: string;
  data: number;
  color: string;
};

export const StatsCard = ({ description, data, color }: StatsCardProps) => (
  <YStack
    backgroundColor={"$gray1"}
    borderColor={"$gray6"}
    borderWidth={1}
    borderRadius={16}
    padding={24}
  >
    <Text fontSize={48} marginLeft={-16}>
      {color === "red" ? "💨" : "🌲"}
    </Text>
    <Text fontSize={14} marginTop={12} marginBottom={6}>
      {description}
    </Text>
    <Text
      color={color === "red" ? "$red11" : "$green11"}
      fontWeight={"bold"}
      fontSize={32}
    >
      {color === "red" ? `${data}kg of CO2` : `${data} trees`}
    </Text>
  </YStack>
);
