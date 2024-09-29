import { atom } from "jotai";
import { withImmer } from "jotai-immer";

const primitiveOnboardingAtom = atom({
  deviceId: "",
  homeType: "",
  transportType: "",
  carHoursPerDay: 0,
});

export const onboardingAtom = withImmer(primitiveOnboardingAtom);
