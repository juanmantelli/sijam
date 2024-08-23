import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";
import { Empleado } from "@/models/empleado";

const api = "http://localhost:8000/empleado";

export const createEmpleado = async (data: Empleado) => {
  try {
    const res = await axios.post(api, data);
    return res;
  } catch (error) {
    handleError(error);
  }
};

export const getEmpleados = async () => {
  try {
    const res = await axios.get(api);
    return res;
  } catch (error) {
    handleError(error);
  }
};

export const bajaEmpleado = async (id: number) => {
  try {
    const res = await axios.put(`${api}/unsubscribe/${id}`);
    return res;
  } catch (error) {
    handleError(error);
  }
};