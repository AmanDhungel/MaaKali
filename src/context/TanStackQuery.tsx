"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";

const TanStackQuery = ({ children }: { children: React.ReactNode }) => {
  const queryClientRef = useRef<QueryClient | null>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
};

export default TanStackQuery;
