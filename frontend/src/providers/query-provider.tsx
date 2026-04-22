"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import react, { useState } from "react";

export default function QueryProvider({children}: {children: react.ReactNode}) {
  const [query] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: false,
      },
      mutations: {
        throwOnError: false,
      },
    }
  }));

  return (
    <QueryClientProvider client={query}>
      {children}
    </QueryClientProvider>
  )
}