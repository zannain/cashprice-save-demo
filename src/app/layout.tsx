import Nav from "@/components/Nav/Nav";
import "./globals.css";
import type { Metadata } from "next";
import DrugSearchProvider from "@/components/DrugSearchProvider/DrugSearchProvider";

export const metadata: Metadata = {
  title: "eNavvi",
  description: "Cashprice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">
        <DrugSearchProvider>
          <Nav />
          {children}
        </DrugSearchProvider>
      </body>
    </html>
  );
}
