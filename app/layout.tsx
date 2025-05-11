import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const mona = Mona_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSell - Sell Your Software Licenses",
  description: "Sell your unused software licenses with ease and get paid fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={mona.className}>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
