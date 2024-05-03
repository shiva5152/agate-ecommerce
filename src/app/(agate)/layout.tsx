import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/lib/redux/provider";
import Header from "@/components/Header";
import AgateFooter from "@/components/agate/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "agate-next-app",
  description: "Agate e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
          <AgateFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
