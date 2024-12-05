import axios from "axios";
import { Device } from "../types/Device";
import { Network } from "../types/Network";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_ZEROTIER_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${import.meta.env.VITE_ZEROTIER_API_TOKEN}`,
  },
});

export const getNetworks = async (): Promise<Network[]> => {
  try {
    const response = await apiClient.get<Network[]>("/network");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(`HTTP error! status: ${error.response.status}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const getNetworkMembers = async (
  networkId: string
): Promise<Device[]> => {
  try {
    const response = await apiClient.get<Device[]>(
      `/network/${networkId}/member`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(`HTTP error! status: ${error.response.status}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
