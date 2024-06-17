import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diversatech",
  description: "Diversatech is a club aiming to bring people into technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
