import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';

const kanit = Kanit({ subsets: ["latin","thai"], weight: ["500","700","400"] });

export const metadata: Metadata = {
  title: "Deez Nuts - ถั่วแสนอร่อย",
  description: "อยากกินถั่วชนิดไหนก็มา ถั่วจากทุกมุมโลกอยู่ที่นี่",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>   
     </html>
  );
}
