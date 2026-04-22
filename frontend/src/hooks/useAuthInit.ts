"use client";
import { useEffect } from "react";
import { userService } from "@/services/userService";
import { useAuthStore } from "@/store/useAuthStore";

export const useAuthInit = () => {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    userService.getMe()
      .then((data) => setUser(data.user))
      .catch(() => setUser(null));
  }, []);
};