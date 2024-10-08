import axios from "@/api/axios";
import { handleError } from "../helpers/ErrorHandler";

const api = "/fichada";

export const uploadFichada = async (data: FormData) => {
  try {
    const res = await axios.post(api, data);

    return res.data;
  } catch (error) {
    handleError(error);
  }
};