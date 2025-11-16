import axios from "axios";


const COMMON_CONFIG = {
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

export const httpService = axios.create({
  ...COMMON_CONFIG,
});