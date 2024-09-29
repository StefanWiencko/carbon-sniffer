import { FontAwesome } from "@expo/vector-icons";
import { Button } from "tamagui";

type OnboardingButtonProps = {
  onPress: () => void;
  copy: string;
};

export const OnboardingButton = ({ onPress, copy }: OnboardingButtonProps) => {
  return (
    <Button
      iconAfter={
        <FontAwesome
          size={20}
          style={{ position: "absolute", right: 20 }}
          name="caret-right"
        />
      }
      height={70}
      onPress={onPress}
    >
      {copy}
    </Button>
  );
};
