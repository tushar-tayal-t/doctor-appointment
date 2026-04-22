import "./globals.css";
import { Inter } from "next/font/google";
import type { FC, ReactNode } from "react";
import { metadataConfig } from "@/config/site";
import Providers from "@/providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = metadataConfig;

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster position="top-right"/>
      </body>
    </html>
  );
};

export default RootLayout;
