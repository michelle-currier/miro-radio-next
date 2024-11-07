import type { Metadata } from "next";
import localFont from "next/font/local";
import { Raleway } from "@next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway-sans",
  weight: "100 900",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Miro Radio",
  description: "New Orleans underground music archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={`${raleway.variable} antialiased`}>
        <div className="w-full flex flex-col items-center justify-items-center min-h-screen gap-4 font-[family-name:var(--font-raleway-sans)] fun-bg">
          <main className="container flex flex-col gap-8 items-center sm:items-start sm:px-1 lg:px-16 pb-10 max-xl border-b-4 border-slate-900">
            {children}
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
