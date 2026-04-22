import { api } from "@/lib/axios";
import { loginUserSchemaType } from "@/types/login.schema";
import axios from "axios";

export const userService = {
  async loginUser(data: loginUserSchemaType) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`, 
      data,
      {withCredentials: true}
    );
    return res.data;
  },
  async getMe() {
    const res = await api.get("/auth/me");
    return res.data;
  }
}

