"use client";
import type { ReactNode } from "react";
import { UserProvider } from "@/context/user.context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import getCookie from "@/utils/getCookieValue";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = getCookie("userKey");

    if (!isAuthenticated) {
      router.push("/welcome");
    }
  }, [router]);

  return <UserProvider>{children}</UserProvider>;
};
