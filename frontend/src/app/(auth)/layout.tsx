import type { FC, ReactNode } from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div 
    className="flex min-h-screen items-center justify-center bg-slate-100 p-4"
  >{children}</div>
);

export default AuthLayout;
