"use client";
import { userService } from "@/services/userService";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";


export const useLoginUser = () => {
  const setUser = useAuthStore((s) => s.setUser);
  let isAuth = useAuthStore((s) => s.isAuth);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push('/dashboard');
    }
  }, [isAuth, router]);

  return useMutation({
    mutationFn: userService.loginUser,
    onSuccess: (res) => {
      const {data} = res;
      setUser(data?.user);
      toast.success(res?.message);
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
}