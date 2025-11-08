import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "José Mboane | Desenvolvedor Full-Stack & Mobile",
  description: "Portfólio moderno, futurista e profissional de José Mboane.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={poppins.variable}>
      <body className="bg-[#020409] text-white font-sans antialiased">{children}</body>
    </html>
  );
}