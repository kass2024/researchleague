"use client";
import type { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/banner";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Research League</title>
      <meta name="description" content="Research League app" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      <link rel="shortcut icon" href="/league.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@1,6..12,300&family=Poppins:wght@100;300&family=Roboto:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <body className={`w-[100vw] overflow-x-hidden`}>
        <Banner />
        <Navbar />
        <Suspense
          fallback={
            <div className="w-full mt-4 ml-4">
              <h3>Loading the page data . . .</h3>
            </div>
          }
        >
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
