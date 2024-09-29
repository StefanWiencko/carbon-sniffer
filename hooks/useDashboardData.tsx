import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ApiResponse {
  co2Weekly: number;
  co2Monthly: number;
  co2Yearly: number;
  treeQuota: number;
  complaintPoints: number;
}

const getData = async (url: string): Promise<ApiResponse> => {
  const { data, status } = await axios.get(url);

  if (status) {
    throw new Error("Network response was not ok");
  }
  console.log(data);
  return data as any;
};

const useDashboardData = (id: string) => {
  return useQuery({
    queryFn: () =>
      getData(
        `https://carbon-sniffers-5b2580f47a65.herokuapp.com/emissions?deviceId=${id}`
      ),
    queryKey: ["dashboardData"],
  });
};

export default useDashboardData;
