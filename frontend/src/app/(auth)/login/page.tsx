"use client";
import { useLoginUser } from "@/hooks/useLogin";
import { useAuthStore } from "@/store/useAuthStore";
import { loginUserSchema, loginUserSchemaType } from "@/types/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm<loginUserSchemaType>({
    resolver: zodResolver(loginUserSchema)
  });
  const {mutate, isPending} = useLoginUser()    

  const submitLoginForm = (data: loginUserSchemaType) => {
    mutate(data);
  }

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm">
      <h1 className="text-xl font-semibold">Login to MediBook</h1>
      <p className="mt-1 text-sm text-slate-500">Use your clinic credentials to continue.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(submitLoginForm)}>
        <input 
          className="w-full rounded-md border border-slate-300 px-3 py-2" 
          {...register("email")} 
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input 
          {...register("password")} 
          className="w-full rounded-md border border-slate-300 px-3 py-2" 
          placeholder="Password" 
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <button 
          type="submit" 
          className="w-full rounded-md bg-[#185FA5] py-2 text-white"
          disabled={isPending}
        >{isPending ? "Signing in..." : "Login"}</button>
      </form>
    </div>
  )
};

export default LoginPage;
