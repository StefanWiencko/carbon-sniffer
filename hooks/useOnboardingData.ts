import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Define types for your data and response
interface PostData {
  deviceId: string;
  homeType: string;
  transportType: string;
  carHoursPerDay: number;
}

interface ApiResponse {
  deviceId: string;
  homeType: string;
  transportType: string;
  carHoursPerDay: number;
}

const postData = async (url: string, data: PostData): Promise<ApiResponse> => {
  const response = await axios.post(url, data);

  if (!response.status) {
    throw new Error("Network response was not ok");
  }

  return response as any;
};

const useOnboardingData = () => {
  return useMutation<ApiResponse, Error, PostData>({
    mutationFn: (data) =>
      postData(
        "https://carbon-sniffers-5b2580f47a65.herokuapp.com/users",
        data
      ),
    onError: (error) => {
      console.error("Error:", error);
    },
    // onSuccess: (data) => {
    //   console.log("Success:", data);
    // },
  });
};

export default useOnboardingData;
