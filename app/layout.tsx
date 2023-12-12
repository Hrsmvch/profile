import { AppWrapper } from "@/components/appWrapper/appWrapper";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harasymovych HV",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
