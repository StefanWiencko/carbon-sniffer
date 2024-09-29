import { XStack, Text, ScrollView } from "tamagui";

export default function SettingsScreen() {
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
          User account
        </Text>
      </XStack>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </ScrollView>
  );
}
