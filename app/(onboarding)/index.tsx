import FontAwesome from "@expo/vector-icons/FontAwesome";
import { YStack, Text, Button } from "tamagui";
import { useAtom } from "jotai";
import { onboardingAtom } from "@/atoms";
import { useRouter } from "expo-router";
import { OnboardingButton } from "@/constants/OnboardingButton";

export default function AccommodationScreen() {
  const router = useRouter();
  const [, setOnboardingValue] = useAtom(onboardingAtom);

  const onPress = (value: string) => {
    setOnboardingValue((draft) => {
      draft.deviceId = Math.random().toString();
      draft.homeType = value;
    });
    router.push("/(onboarding)/TransportType");
    // const Accommodation;
  };
  return (
    <YStack padding="$5" gap="$5">
      <Text fontSize="$9" fontWeight="bold" textAlign="center">
        Where do you live?
      </Text>
      <YStack
        width="80%"
        backgroundColor="$gray2"
        height={1}
        marginHorizontal="auto"
      />
      <OnboardingButton copy="Apartment" onPress={() => onPress("apartment")} />
      <OnboardingButton copy="House" onPress={() => onPress("house")} />
    </YStack>
  );
}
