import axios from "axios";

export const api = axios.create({
  baseURL: "http://dev.alexandria.solar:8888",
});
