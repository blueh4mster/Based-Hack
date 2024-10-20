import axios from "axios";

import { API_URL } from "../constants/constants";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});
