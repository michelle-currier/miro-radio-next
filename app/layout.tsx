"use client";

import localFont from "next/font/local";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import Footer from "@/components/footer";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway-sans",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Miro Radio",
//   description: "New Orleans underground music archive",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <html lang="en">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={`${raleway.variable} antialiased squares-bg`}>
        <div className="w-full flex flex-col items-center justify-items-center min-h-screen gap-4 font-[family-name:var(--font-geist-sans)] fun-bg">
          <main className="container flex flex-col gap-8 items-center sm:items-start sm:px-1 lg:px-16 pb-10 max-xl border-b-4 border-slate-900">
            {children}
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
