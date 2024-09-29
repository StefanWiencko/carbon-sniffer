import FontAwesome from "@expo/vector-icons/FontAwesome";
import { YStack, Text, Button } from "tamagui";
import { useAtom } from "jotai";
import { onboardingAtom } from "@/atoms";
import { useRouter } from "expo-router";
import { OnboardingButton } from "@/constants/OnboardingButton";

export default function TransportTypeScreen() {
  const router = useRouter();
  const [, setOnboardingValue] = useAtom(onboardingAtom);

  const onPress = (value: string) => {
    setOnboardingValue((draft) => {
      draft.transportType = value;
    });
    router.push("/(onboarding)/TransportDuration");
  };
  return (
    <YStack padding="$5" gap="$5">
      <Text fontSize="$9" fontWeight="bold" textAlign="center">
        How did you commute?
      </Text>
      <YStack
        width="80%"
        backgroundColor="$gray2"
        height={1}
        marginHorizontal="auto"
      />
      <OnboardingButton
        copy="By Electric Vehicle"
        onPress={() => onPress("ev")}
      />
      <OnboardingButton copy="By Car" onPress={() => onPress("car")} />
      <OnboardingButton copy="By Bus" onPress={() => onPress("public")} />
    </YStack>
  );
}
