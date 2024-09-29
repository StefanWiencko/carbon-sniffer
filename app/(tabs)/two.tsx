import { StyleSheet } from "react-native";
import { YStack, XStack, Text } from "tamagui";

export default function TabTwoScreen() {
  return (
    <YStack>
      <XStack
        width={"90%"}
        borderColor={"$gray5"}
        borderBottomWidth={1}
        marginHorizontal="auto"
        paddingVertical={16}
      >
        <Text fontSize={32} fontWeight={"bold"}>
          Library
        </Text>
      </XStack>
    </YStack>
  );
}
