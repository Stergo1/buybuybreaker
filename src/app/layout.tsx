import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buy Buy Breaker",
  description: "Buy and sell circuit breakers and electrical equipment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
