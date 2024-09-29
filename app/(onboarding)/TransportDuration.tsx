import { YStack, Text, Button } from "tamagui";
import { useAtom } from "jotai";
import { onboardingAtom } from "@/atoms";
import { useRouter } from "expo-router";
import useOnboardingData from "@/hooks/useOnboardingData";
import { OnboardingButton } from "@/constants/OnboardingButton";

export default function TransportDurationScreen() {
  const router = useRouter();
  const [onboardingValues, setOnboardingValue] = useAtom(onboardingAtom);
  const { mutate, isSuccess } = useOnboardingData();

  const onPress = async (value: number) => {
    setOnboardingValue((draft) => {
      draft.carHoursPerDay = value;
    });
    mutate(onboardingValues);
  };

  if (isSuccess) {
    router.push("/(onboarding)/Stats");
  }

  return (
    <YStack padding="$5" gap="$5">
      <Text fontSize="$9" fontWeight="bold" textAlign="center">
        How many hours you use car daily?
      </Text>
      <YStack
        width="80%"
        backgroundColor="$gray2"
        height={1}
        marginHorizontal="auto"
      />
      <OnboardingButton copy="1 hour" onPress={() => onPress(1)} />
      <OnboardingButton copy="2-3 hours" onPress={() => onPress(3)} />
      <OnboardingButton copy="More than 5 hours" onPress={() => onPress(5)} />
    </YStack>
  );
}
