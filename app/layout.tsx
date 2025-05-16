import type { Metadata } from "next";
import "./globals.css";
import RootLayoutContent from "./components/RootLayoutContent";

export const metadata: Metadata = {
  title: "Asọ̀jà",
  description:
    "Asọ̀jà is a smart sales dashboard built for merchants and modern businesses. Track sales, manage customers, and grow all in one place.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-pry text-content min-h-screen `}>
        <RootLayoutContent children={children} />
      </body>
    </html>
  );
}
